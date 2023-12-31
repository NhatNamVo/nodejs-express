const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const app = express();
const port = 4400;

const route = require('./routes');
const db = require('./config/db');

// Connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// middle ware
app.use(
  express.urlencoded({
    extended: true,
  }),
); // dùng cho các dạng formdata
app.use(express.json()); // dạng gửi từ javascript gửi lên

app.use(morgan('combined'));
app.use(methodOverride('_method'))
// template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
