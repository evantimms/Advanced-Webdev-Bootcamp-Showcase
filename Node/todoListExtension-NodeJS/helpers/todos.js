var db = require('../models');

exports.getTodos = function(req,res){
    db.Todo.find()
    .then(function(todos){
        res.status(201).json(todos);
    }).catch(function(e){
        res.send(e);
    });
};

exports.createTodo = function(req,res){
    // creating new todo using db model
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo);
    })
    .catch((e) => res.send(e));
};

exports.showTodo = function(req,res){
    //grabbing todoId from params object in request
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch((e) => res.send(e));
};

exports.updateTodo = function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
        res.send(updatedTodo);
    })
    .catch((e) => res.send(e));
};

exports.deleteTodo = function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "We deleted it!"})
    })
    .catch((e) => res.send(e));
};

module.exports = exports;