const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const Course = new Shema({
    slug: { type: String, default: ''},
    name: { type: String, require: true },
    description: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String, require: true, maxLength: 500 },
});

module.exports = mongoose.model('Cource', Course);