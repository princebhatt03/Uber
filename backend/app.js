const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

// io.on('connection', function (socket) {
//   socket.on('send-location', function (data) {
//     io.emit('receive-location', { id: socket.id, ...data });
//   });
//   socket.on('disconnect', function () {
//     io.emit('user-disconnected', socket.id);
//   });
//   console.log('Connected');
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
