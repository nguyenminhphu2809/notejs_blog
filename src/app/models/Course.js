const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: 'string', maxlength: 255 },
        description: { type: 'string', maxlength: 655 },
        image: { type: 'string', maxlength: 255 },
        slug: { type: 'string', maxlength: 255, slug: 'name', unique: true },
        videoId: { type: 'string', maxlength: 255 },
    },
    {
        _id: false,
        timestamps: true,
    },
);

Course.plugin(AutoIncrement);

module.exports = mongoose.model('Course', Course);
