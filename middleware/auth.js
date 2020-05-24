var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = function (req, res, next) {

    const token = req.header('x-auth-token');

    // Check if token
    if (!token) {
        res.send(400).json({ msg: 'Token not found' });
    }

    // Verify token using jwt
    try {
        const decoded = jwt.verify(token, config.getSecret);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token not valid' });
    }
}
