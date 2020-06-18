var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var jwt = require('jsonwebtoken');
var config = require('../config');
var bodyParser = require('body-parser');
var todos = require('../models/todos');
const User = require('../models/user');
const Projects = require('../models/projects');


// @route    /api/projects
// desc      Todo Test route
// @access   Public
router.get('/projectTest', (req, res) => res.send('Project Route'));


// @route    /api/projects
// desc      Return all projects from user token
// @access   Private
router.get('/', auth, async function (req, res) {
    console.log('Requested Projects');
    try {
        const user = await User.findById(req.user.id).select('-password');
        const currProjects = await Projects.find({ userId: user.id });
        if (!currProjects) {
            console.log('Projects not found');
            res.status(404).json('Not Found');
        }
        res.send(currProjects);
    } catch (error) {
        console.log('Error in fetching projects', error);
        res.status(500).json('Server Error');
    }
});


// @route    /api/project
// desc      Post New ToDo
// @access   Private
router.post('/', auth, async (req, res) => {
    console.log('Requested Creating New Project');
    try {
        const user = await User.findById(req.user.id).select('-password');

        await Projects.create({
            userId: req.user.id,
            createdAt: req.body.createdAt,
            description: req.body.description
        });
        res.status(200).json('Project Added');
    } catch (error) {
        console.log('Error in Creating Project', error);
        res.status(500).json('Server Error')
    }
});


// @route    /api/projects
// desc      Delete project
// @access   Private
router.delete('/', auth, async (req, res) => {
    console.log('Requesting Deleting Project')
    try {
        const user = await User.findById(req.user.id).select('-password');
        const isProjectDeleted = await Projects.findByIdAndDelete(req.body.id);
        if(!isProjectDeleted) {
            console.log('Project not found');
            res.status(404).json('Project Not Found');
        }
        res.status(200).json('Project Deleted');

    } catch (error) {
        console.log('Error in deleting Project', error);
        res.status(500).json('Server Error');
    }
});

module.exports = router;
