var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
var jwt = require('jsonwebtoken');
var config = require('../config');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');


var User = require('../models/user');


// @route    /api/auth
// desc      check authentication and return user
// @access   Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json('Server Error');
    }
})

// @route    /api/auth
// desc      check authentication and return token
// @access   Public

router.post('/',
    [
        check('email').isEmail().withMessage('Email must be in proper format'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    async (req, res) => {
        let { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(404).json({ msg: 'Invalid Credentials' });
            }

            let isMatched = await bcrypt.compare(password, user.password);

            if (!isMatched) {
                res.status(404).json({ msg: 'Invalid Credentials 1' });
            }

            const payload = {
                user: {
                    id: user.id,
                }
            }

            jwt.sign(
                payload,
                config.getSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json(token);
                }
            )

            console.log('User Logged In');
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    })


module.exports = router;

