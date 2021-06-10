require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db-connection');

//configuracion global de rutas
// app.use(require('./routes/main'));

//Routes
app.get('/', function (req, res) {
  // res.sendFile(path.resolve(__dirname, '../client/login.html'));
  res.send("Welcome to my api!")
})


// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 8000);
app.listen(8000);
