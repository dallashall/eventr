import loadStore from './store';
import action from './actions';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const port = 8000;

const superState = {};

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
  const { room, user } = socket.handshake.query;
  console.log(`${user} connected to ${room}`);
  superState[room] = superState[room] || loadStore();
  const store = superState[room];
  socket.join(room);
  const userConnected = action('USER_CONNECTED', user);
  store.dispatch(userConnected);
  socket.emit('dispatchAction', userConnected);
  socket.emit(`hydrateUser:${user}`, store.getState());

  // Upload new store
  socket.on('upload', (newState) => {
    superState[room] = loadStore(newState);
    socket.emit('hydrate', newState);
  });

  socket.on('action', (userAction) => {
    store.dispatch(userAction);
    socket.emit('action', userAction);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`${user} disconnected from ${room}`);
    const userDisconnected = action('USER_DISCONNECTED', user);
    store.dispatch(userDisconnected);
    socket.emit('dispatchAction', userDisconnected);
  });
});

http.listen(port, () => console.log(`Listening on: ${port}`));