const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const handleBars  = require('express-handlebars');
 

app.use(express.static(path.join(__dirname, 'public')));

// Http logger
app.use(morgan('combined'));

// handlebars
app.engine('hbs', handleBars(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// console.log(path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/tin-tuc', function (req, res) {
  res.render('news');
});
 
app.listen(3000);