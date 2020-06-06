var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = schema({
    name: String,
    email: String,
    password: String
})

var User = new mongoose.model('User', userSchema);

module.exports = User;
