var express = require('express');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/public'))



const port = process.env.PORT || 3000;
var clappers = 0;

io.on('connection', (socket) => {
  clappers++;
  io.emit('user update', clappers);

  socket.on('clap', () => {
    io.emit('clap', { });
  });

  socket.on('disconnect', () => {
    clappers--;
    io.emit('user update', clappers);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});