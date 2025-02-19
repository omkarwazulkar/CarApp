const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    name: String,
    brand: String,
    year: Number,
    engine: String,
    horsepower: Number,
    price: Number
});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;