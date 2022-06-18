const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const User = new Schema(
    {
        id_user: { type: Number},
        username: { type: 'string', maxlength: 255 },
        password: { type: 'string', maxlength: 255 },
        id_role: { type: Number},
    },
    {
        timestamps: true,
    },
);

User.plugin(AutoIncrement, {inc_field: 'id_user'})

module.exports = mongoose.model('User', User);
