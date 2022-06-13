const mongoose = require('mongoose');
const { use } = require('../../routes/site');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
