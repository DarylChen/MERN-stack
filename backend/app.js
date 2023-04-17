//jshint esversion:6

const express = require("express");
const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const bodyParser = require("body-parser");
const colors = require("colors");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

connectDB();

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

// app.use(express.static("public"));


app.listen(port, function() {
  console.log('Server started on port 3000');
});
