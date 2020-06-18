var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var config = require('./config');
var mongoose = require('mongoose');


var port = process.env.PORT || 5000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// For CoRS
app.use(cors({ origin: 'http://localhost:3000' }));

console.log(config.getDBConnectionString());
mongoose.connect(config.getDBConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });


// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/projects', require('./routes/projects'));


app.listen(port);
app.get('/', (req, res) => res.send('Hello World!'))
