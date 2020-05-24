var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var todo = require('../models/todoSchema');

const GET_ALL_TODOS = '/api/todos'
const GET_BY_USERNAME = '/api/todos/:uname';
const GET_BY_ID = '/api/todos/:id';
const UPDATE_TODO = '/api/todo';
const DELETE_TODO = '/api/todo';



// @route    /api/todos
// desc      Todo Test route
// @access   Public
router.get('/', (req, res) => res.send('Todo Route'));


// @route    /api/todos
// desc      Test route, Return all todos
// @access   Private
router.get(GET_ALL_TODOS, function (req, res) {

    var seedData = [
        {
            username: 'Pratap',
            todo: 'Check Web',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'Abhay',
            todo: 'Learn Node',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'Pratap',
            todo: 'Learn Express',
            isDone: false,
            hasAttachment: false
        }
    ];
    todo.create(seedData, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});



// @route    /api/todos
// desc      Return all todos for a user
// @access   Private
router.get(GET_BY_USERNAME, function (req, res) {
    todo.find({ username: req.params.uname }, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});


// @route    /api/todos/:id
// desc      Return particular todo
// @access   Private
router.get(GET_BY_ID, function (req, res) {
    todo.findById({ _id: req.params.id }, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});


// @route    /api/todo
// desc      Update todo
// @access   Private
router.post(UPDATE_TODO, function (req, res) {

    if (req.body.id) {
        todo.findByIdAndUpdate(req.body.id, {
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }, function (err, result) {
            if (err) throw err;

            res.send(result);
        });
    } else {
        todo.save({
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    }
});



// @route    /api/todo
// desc      Delete todo
// @access   Private
router.delete(DELETE_TODO, function (req, res) {
    todo.findByIdAndDelete(req.body.id, function (err, result) {
        if (err) throw err;
        res.send('Success');
    })
});

module.exports = router;
