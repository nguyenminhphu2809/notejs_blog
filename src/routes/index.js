const newRouter = require('./news');
const siteRouter = require('./site');

const coursesRouter = require('./courses');

function route(app) {
    //code cũ
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    // console.log(req.query.q);
    // res.render('news');
    // })
    app.use('/courses', coursesRouter);
    app.use('/news', newRouter);
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    // // console.log(req.query.q);
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send("");
    // });
}

module.exports = route;
