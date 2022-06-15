const Role = require('../models/Role');
const { mongooseToObject } = require('../../util/mongoose');

class Rolecontroller {

    //[GET] /courses/create
    create(req, res, next) {
        res.render('role/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        //Tạo mới lại id
        // Role.counterReset('id', function(err) {
        //     // Now the counter is 0
        // });
        const role = new Role(req.body);
        role.save()
            .then(() => res.redirect('/create'))
            .catch(next);
    }

}

module.exports = new Rolecontroller();
