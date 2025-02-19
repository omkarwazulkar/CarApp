import { useState } from "react";
import axios from "axios";

const CarForm = () => {
  const [car, setCar] = useState({
    name: "",
    brand: "",
    year: "",
    engine: "",
    horsepower: "",
    price: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/cars", car);
      if (response.status === 201) {
        setMessage("Car added successfully!");
        setCar({ name: "", brand: "", year: "", engine: "", horsepower: "", price: "" }); // Reset form
      }
    } catch (error) {
      setMessage("Error adding car: " + error.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
      <h2>Add a Car</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Car Name" value={car.name} onChange={handleChange} required />
        <input type="text" name="brand" placeholder="Brand" value={car.brand} onChange={handleChange} required />
        <input type="number" name="year" placeholder="Year" value={car.year} onChange={handleChange} required />
        <input type="text" name="engine" placeholder="Engine" value={car.engine} onChange={handleChange} required />
        <input type="number" name="horsepower" placeholder="Horsepower" value={car.horsepower} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={car.price} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CarForm;
