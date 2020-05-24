var mongoose = require('mongoose');

var schema = mongoose.Schema;

var toDoSchema = schema({
    userId: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var todos = mongoose.model('Todos', toDoSchema);

module.exports = todos;