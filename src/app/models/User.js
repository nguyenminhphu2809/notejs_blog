const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const User = new Schema(
    {
        username: { type: 'string', maxlength: 255 },
        password: { type: 'string', maxlength: 255 },
        role: { type: 'string', maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
