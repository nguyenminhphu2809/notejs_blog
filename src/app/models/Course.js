const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: 'string', maxlength: 255 },
    description: { type: 'string', maxlength: 655 },
    image: { type: 'string', maxlength: 255 },
    slug: { type: 'string', maxlength: 255 , slug: 'name', unique: true },
    videoId: { type: 'string', maxlength: 255 },
}, {
    timestamp: true,
});

module.exports = mongoose.model('Course', Course);
