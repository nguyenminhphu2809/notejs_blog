const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

const app = express();

const route = require('./routes');
const db = require('./config/db');

//Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP Logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log(__dirname);

//Route init
route(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
