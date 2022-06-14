const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class Courseontroller {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnKLvUrsBZW203awokL4gnj1qjLQ`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new Courseontroller();
