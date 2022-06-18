const User = require('../models/User');
const Role = require('../models/Role');

const { mutipleMongooseToObject } = require('../../util/mongoose');

const { mongooseToObject } = require('../../util/mongoose');
const { render } = require('node-sass');

class Usercontroller {

    //[GET] /user/
    home(req, res, next) {
        User.find({})
            .then(function (users,roles) {
                res.render('users/home', {
                    users: mutipleMongooseToObject(users)
                })
            }).catch(err => {console.log(err)});
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
        const formData = req.body;
        var username = formData.username;
        formData.password = username.trim().slice(3,10);
        
        const user = new User(formData);
        user.save()
            .then(() => {
                res.redirect('/user/')
            })
            .catch(next);
    }

}

module.exports = new Usercontroller();
