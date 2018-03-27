const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 8000;

const superState = {};

app.get('/', (req, res) => res.send('Hello!!'));
// app.get('*', () => console.log('ping'));

io.on('connection', (socket) => {
  const { room } = socket.handshake.query;
  console.log(`New connection for ${room}`);
  superState[room] = superState[room] || {};
  socket.join(room).emit('update', superState[room]);
  socket.on('update', (newState) => {
    superState[room] = newState;
    socket.emit('update', superState[room]);
  });
  socket.on('disconnect', () => {
    console.log('...left.');
  });
});



http.listen(port, () => console.log(`Listening on: ${port}`));
