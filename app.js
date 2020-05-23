var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setUpController = require('./controllers/setupController');


var port = process.env.PORT || 5000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


console.log(config.getDBConnectionString());
mongoose.connect(config.getDBConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });
setUpController(app);


app.listen(port);
app.get('/', (req, res) => res.send('Hello World!'))
