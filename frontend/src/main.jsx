import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-car" element={<CarForm />} />
        <Route path="/cars" element={<CarList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
