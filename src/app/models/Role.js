const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const NewSchema = mongoose.Schema;

mongoose.plugin(slug);

const Role = new NewSchema(
    {
        id_role: { type: Number },
        role_name: { type: 'string', maxlength: 255 },
    },
);

Role.plugin(AutoIncrement, {inc_field: 'id_role'});

module.exports = mongoose.model('Role', Role);