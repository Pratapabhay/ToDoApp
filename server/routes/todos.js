var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var jwt = require('jsonwebtoken');
var config = require('../config');
var bodyParser = require('body-parser');
var todos = require('../models/todos');
const User = require('../models/user');
const Projects = require('../models/projects');


// @route    /api/todos
// desc      Todo Test route
// @access   Public
router.get('/test', (req, res) => res.send('Todo Route'));


// @route    /api/todos
// desc      Return all todos from user token
// @access   Private
router.get('/', auth, async function (req, res) {
    console.log('Requested ToDos');
    try {
        const user = await User.findById(req.user.id).select('-password');
        const currTodo = await todos.find( { userId: user.id, projectId: req.query.projectId });
        if (!currTodo) {
            console.log('ToDo not found');
            res.status(404).json('Not Found');
        } else {
            res.send(currTodo);
        }
    } catch (error) {
        console.log('Error in searching project', error);
        res.status(500).json('Server Error');
    }
});


// @route    /api/todo
// desc      Update todo with given id
// @access   Private
router.patch('/', auth, async (req, res) => {

    try {

        const updated = await todos.findByIdAndUpdate(req.body.id, {
            userId: req.user.id,
            projectId: req.query.projectId,
            task: req.body.task
        });

        if(!updated) {
            res.status(404).json('Todo Not Found!')
        } else {
            console.log(updated);
            res.status(200).json('ToDo Updated');
        }

    } catch (error) {
        console.log(error);
        res.status(500).json('Server Error');
    }
});


// @route    /api/todo
// desc      Post New ToDo
// @access   Private
router.post('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');

        await todos.create({
            userId: req.user.id,
            projectId: req.query.projectId,
            task: req.body.task
        });
        res.status(200).json('ToDo Added');
    } catch (error) {
        console.log('Error in creating Todo', error);
        res.status(500).json('Server Error')
    }
});


// @route    /api/todo
// desc      Delete todo
// @access   Private
router.delete('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        const deleted = await todos.findByIdAndDelete(req.body.id);
        if(!deleted) {
            res.status(404).json('ToDo Not Found');
        } else {
            console.log(deleted);
            res.status(200).json('ToDo Deleted');
        }
    } catch (error) {
        console.log('Error in Deleting Todo', error);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
