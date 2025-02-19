require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Connection Error:', err));

const Car = require('./models/Car'); // Import Car model

app.get('/cars', async (req, res) => {
  const cars = await Car.find(); // Fetch all cars
  res.json(cars);
});

app.post('/cars', async (req, res) => {
  const newCar = new Car(req.body); // Create a new car from request
  await newCar.save(); // Save to database
  res.status(201).json(newCar);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));