const redis = require('redis');
const express = require('express');
const http = require('http');
const Server = require('socket.io');
const redisAdapter = require('socket.io-redis');

const {
  getRedis,
  setRedis,
  delRedis,
} = require('./utils/redisPromise');
const loadStore = require('./redux/store');
const action = require('./redux/utils/action');
const {
  RECEIVE_USER,
  REMOVE_USER,
} = require('./redux/actions/users');
const {
  HYDRATE,
} = require('./redux/actions/controls');

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379,
  password: 'isThisOffensive?',
});

const get = getRedis(redisClient);
const set = setRedis(redisClient);
const del = delRedis(redisClient);

const app = express();
const httpServer = http.Server(app);
const io = Server(httpServer);
io.adapter(redisAdapter({
  host: 'redis',
  port: 6379,
  password: 'isThisOffensive?',
}));

const port = 5000;

app.get('/', (req, res) => res.send('Hello!!'));

// On new connection
//   * Create a new store for the key if necessary
//   * Dispatch an action that sets the user as active
//   * Reply with the hydrate action and the current state (after user has been set as active)

io.on('connection', (socket) => {
  const { room, user } = JSON.parse(socket.handshake.query.payload);
  console.log(`${user.userName} connected to ${room}`);
  socket.join(room);
  const userConnected = action(RECEIVE_USER, user);
  const roomSocket = io.to(room);
  const addAndHydrateUser = async function addAndHydrateUser() {
    const initialState = await get(room);
    const store = loadStore(initialState || {});
    store.dispatch(userConnected);
    const ok = await set(room, store.getState());
    if (ok) {
      socket.to(room).emit('action', userConnected);
      roomSocket.emit(`hydrateUser:${user.id}`, { type: HYDRATE, payload: store.getState() });
    }
  };
  addAndHydrateUser();
  const applyAction = async function applyAction(actionObj) {
    const store = loadStore(await get(room));
    store.dispatch(actionObj);
    const ok = await set(room, store.getState());
    if (ok) roomSocket.emit('action', actionObj);
  };

  // Upload new store
  socket.on('upload', async (newState) => {
    const ok = await set(room, newState);
    if (ok) roomSocket.emit('hydrate', action(HYDRATE, newState));
  });

  // Dispatch and distribute actions
  socket.on('action', async (userAction) => {
    applyAction(userAction);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`${user.userName} disconnected from ${room}`);
    const userDisconnected = action(REMOVE_USER, user);
    applyAction(userDisconnected);
  });

  socket.on('clear', async () => {
    await del(room);
    set(room, {});
  });
});

httpServer.listen(port, '0.0.0.0', () => console.log(`Listening on: ${port}`));
