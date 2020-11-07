// Importing required modules
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const morgan = require("morgan");

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());

app.use(morgan("dev")); // configire morgan

app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use(routes);

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
   useNewUrlParser: true,
   useCreateIndex: true,
 })

mongoose.connection.once('open', () => {
  console.log('\x1b[33m%s\x1b[0m', 'MongoDB database connection established successfully');
})

module.exports = app;
