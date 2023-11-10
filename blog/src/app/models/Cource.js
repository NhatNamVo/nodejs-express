const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Shema = mongoose.Schema;

const Course = new Shema({
    slug: { type: String, slug: 'name' },
    name: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true, maxLength: 500 },
}, {
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete);

module.exports = mongoose.model('Cource', Course);;