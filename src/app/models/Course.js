const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: 'string', maxlength: 255 },
    description: { type: 'string', maxlength: 655 },
    image: { type: 'string', maxlength: 255 },
    slug: { type: 'string', maxlength: 255},
    createdAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
