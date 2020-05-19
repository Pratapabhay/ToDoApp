var bodyParser = require('body-parser');
var todo = require('../models/todoSchema');

const GET_BY_USERNAME = '/api/todos/:uname';
const GET_BY_ID = '/api/todos/:id';
const UPDATE_TODO = '/api/todo';
const DELETE_TODO = '/api/todo';


module.exports = function(app) {

    app.get(GET_BY_USERNAME, function (req, res) {
        todo.find( { username: req.params.uname }, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });

    app.get(GET_BY_ID, function (req, res) {
        todo.findById({ _id: req.params.id }, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });

    app.post(UPDATE_TODO, function (req, res) {

        if(req.body.id) {
            todo.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, result) {
                if (err) throw err;

                res.send(result);
            });
        } else {
            todo.save({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, result) {
                if(err) throw err;
                res.send(result);
            });
        }
    });
    
    app.delete(DELETE_TODO, function (req, res) {
        todo.findByIdAndDelete(req.body.id, function (err, result) {
            if(err) throw err;
            res.send('Success');
        })
    });
}