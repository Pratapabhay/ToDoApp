var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

const User = require('../models/user');


// @route    /api/users
// desc      Test route, Return all todos
// @access   Private
// router.get('/', (req, res) => res.send('User Route'));


router.post('/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email').isEmail().withMessage('Email must be in proper format'),
        check('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),

    ],
    async (req, res) => {

        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ error: { msg: 'User already exist' } });
            }

            user = new User({
                name,
                email,
                password
            });

            // Create salt for Hashing
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt);

            await user.save();
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

        } catch (error) {
            console.log(error);
            return res.status(500).send('Server Error')
        }
    })


module.exports = router;
