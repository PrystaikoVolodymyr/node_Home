const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./router/api.router');

_connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(5000, () => {
  console.log('Host is working');
});

function _connectDB() {
  mongoose.connect('mongodb://localhost:27017/owu_home', { useNewUrlParser: true, useUnifiedTopology: true });
  const { connection } = mongoose;
  connection.on('error', (error) => {
    console.log(error);
  });
}
