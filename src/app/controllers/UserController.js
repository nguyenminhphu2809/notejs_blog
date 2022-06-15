const User = require('../models/User');
const Role = require('../models/Role');

const { mutipleMongooseToObject } = require('../../util/mongoose');

const { mongooseToObject } = require('../../util/mongoose');

class Usercontroller {

    //[GET] /user/
    home(req, res, next) {
        res.render('users/home');
    }

    //[GET] /user/create
    create(req, res, next) {
        Role.find({})
            .then(roles =>  {
                res.render('users/create', {
                    roles: mutipleMongooseToObject(roles),
                });
            })
            .catch(next);        
    }

    //[POST] /user/add_user
    add_user(req, res, next) {
        res.json(req.body);
    }

}

module.exports = new Usercontroller();
