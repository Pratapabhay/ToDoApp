const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Project = schema({
    userId: String,
    description: String,
    createdAt: Date
})
const PROJECT = new mongoose.model('PROJECT', Project);

module.exports = PROJECT;
