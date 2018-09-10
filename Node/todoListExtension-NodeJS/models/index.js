var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

//using promises to avoid using callbacks
mongoose.Promise = Promise;

//requiring the todo model and exporting 
module.exports.Todo = require("./todo");