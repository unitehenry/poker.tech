const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

const cors = require('cors');

const http = require('http').Server(app);
const io = require('socket.io')(http);

const shortid = require('short-id');

const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'app/build/', 'favicon.ico')))

app.use(cors());

app.use(express.static(path.join(__dirname, '/app/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/build/index.html'))
})

io.on('connection', (socket) => {
  console.log('client connected')

  socket.on('join game', (id) => {
    socket.join(id)
    console.log(`client connected to ${id}`)
  })

  socket.on('player join', (id) => {
    io.to(id).emit('player join', socket.id);
  })

  socket.on('update player', (player) => {
    io.to(player.socketId).emit('player update', player)
  })

  socket.on('fold', (fold) => {
    io.to(fold.game).emit('fold', fold.id)
  })

  socket.on('disconnect', () => {
    io.emit('player disconnect', socket.id)
  })
})

http.listen(port, () => console.log(`Poker.Tech Online`))
