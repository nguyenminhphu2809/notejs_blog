const newRouter = require('./news');
const siteRouter = require('./site');
const rolesRouter = require('./roles');
const userRouter = require('./user');
const meRouter = require('./me');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/roles', rolesRouter);
    app.use('/user', userRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

module.exports = route;
