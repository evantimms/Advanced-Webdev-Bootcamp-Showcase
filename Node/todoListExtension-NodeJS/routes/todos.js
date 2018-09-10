var express = require('express');
//we will use the express router to make the code more modular
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");


router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);


router.route('/:todoId')
.get(helpers.showTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;