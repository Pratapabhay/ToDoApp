var todo = require('../models/todoSchema');

module.exports = function (app) {
    app.get('/api/todos', function (req, res) {

        var seedData = [
            {
                username: 'Pratap',
                todo: 'Check Web',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Abhay',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Pratap',
                todo: 'Learn Express',
                isDone: false,
                hasAttachment: false
            }
        ];
        todo.create(seedData, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
}

