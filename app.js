const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
app.use(cors());

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('client connected')
})

http.listen(port, () => console.log(`Poker.Tech Online`))
