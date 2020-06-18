const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = schema({
    name: String,
    email: String,
    password: String
})

const USER = new mongoose.model('USER', UserSchema);

module.exports = USER;
