import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <h1>Car Info App</h1>
      <nav>
        <Link to="/add-car">Add Car</Link> | 
        <Link to="/cars">View Cars</Link>
      </nav>
    </div>
  );
}

export default App
