import loadStore from './redux/store';
import action from './redux/utils/action';
import {
  RECEIVE_USER,
  REMOVE_USER,
} from './redux/actions/users';
import {
  HYDRATE,
} from './redux/actions/controls';

const redis = require('redis');
const express = require('express');

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6000,
  password: 'isThisOffensive?',
});

const get = function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(reply));
      }
    });
  });
};

const set = function set(key, value) {
  return new Promise((resolve, reject) => {
    redisClient.set(key, JSON.stringify(value), (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
};

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const port = 8000;

// const superState = {};

app.get('/', (req, res) => res.send('Hello!!'));

// On new connection
//   * Check if an existing store exists for the key
//     * Create a new store for the key if necessary
//   * Dispatch an action that sets the user as active
//     * Upon success, emit the action to clients
//     * Reply with the hydrate action and the current state (after user has been set as active)

// On action.type HYDRATE
// * Replace exisiting store with a hydrated store
//   * Upon success, emit the same action to clients

// On disconnect
//   * Dispatch action setting user as inactive
//     * Upon success, emit action to clients

io.on('connection', (socket) => {
  console.log(socket.handshake.query);
  const { room, user } = JSON.parse(socket.handshake.query.payload);
  console.log(user);
  console.log(`${user.userName} connected to ${room}`);
  socket.join(room);
  const roomSocket = io.to(room);
  redisClient.get(room, (err, value) => {
    console.log('stored value:', value);
    const store = value ? loadStore(JSON.parse(value)) : loadStore();
    const userConnected = action(RECEIVE_USER, user);
    store.dispatch(userConnected);
    redisClient.set(room, JSON.stringify(store.getState()), (err, ok) => {
      if (ok) {
        socket.to(room).emit('action', userConnected);
        socket.emit(`hydrateUser:${user.id}`, action(HYDRATE, store.getState()));
      }
    });
  });

  // Upload new store
  socket.on('upload', (newState) => {
    redisClient.set(room, JSON.stringify(newState), (err, ok) => {
      if (ok) {
        roomSocket.emit('hydrate', action(HYDRATE, newState));
      }
    });
  });

  socket.on('action', (userAction) => {
    redisClient.get(room, (err, value) => {
      const store = loadStore(JSON.parse(value));
      store.dispatch(userAction);
      redisClient.set(room, JSON.stringify(store.getState()), (err, ok) => {
        if (ok) roomSocket.emit('action', userAction);
      });
    });
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`${user.userName} disconnected from ${room}`);
    const userDisconnected = action(REMOVE_USER, user);
    redisClient.get(room, (err, value) => {
      const store = loadStore(JSON.parse(value));
      store.dispatch(userDisconnected);
      redisClient.set(room, JSON.stringify(store.getState()), (err, ok) => {
        if (ok) roomSocket.emit('action', userDisconnected);
      });
    });
  });
});

http.listen(port, () => console.log(`Listening on: ${port}`));
