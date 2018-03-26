const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 8000;

app.get('/', (req, res) => res.send('Hello!!'));
// app.get('*', () => console.log('ping'));

io.on('connection', (socket) => {
  console.log('New connection');
  socket.on('disconnect', () => {
    console.log('...left.');
  });
});

http.listen(port, () => console.log(`Listening on: ${port}`));
