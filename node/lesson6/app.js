const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./router/api.router');

const app = express();
_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(5000, () => {
  console.log('Port is work');
});

function _connectDB() {
  mongoose.connect('mongodb://localhost:27017/owu-home', { useNewUrlParser: true, useUnifiedTopology: true });
  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
