//jshint esversion:6

const express = require("express");
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const port = process.env.PORT || 3000
const { errorHandler } = require('./middleware/errorMiddleware')
const mongoose = require("mongoose");

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

// const composeSchema = new mongoose.Schema({
//   composeTitle : String,
//   composeBody : String
// })

// const Post = mongoose.model("Post", composeSchema)




app.listen(port, function() {
  console.log('Server started on port 3000');
});
