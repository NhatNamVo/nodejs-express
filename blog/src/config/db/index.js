const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_nodejs_learn')

        console.log('Connect Successfully!!!');
    } catch (error) {
        console.log('Connect Failue!!!');
    }
}

module.exports = { connect };