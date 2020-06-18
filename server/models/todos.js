var mongoose = require('mongoose');

var schema = mongoose.Schema;

var ToDo = schema({
    userId: String,
    projectId: String,
    task: {
        description: String,
        dueDate: Date,
        status: {
            type: String,
            enum : ['NEW', 'IN_PROGRESS', 'DONE'],
            default: 'NEW'
        },
    }
});

var TODO = mongoose.model('TODOS', ToDo);

module.exports = TODO;