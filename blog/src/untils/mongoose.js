module.exports = {
    mutipleMongooseToObject: function(mongoArray) {
        return mongoArray.map(obj => obj.toObject());
    },

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}