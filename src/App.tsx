import React from "react";
import "./App.css";
import Addresses from "./pages/Addresses";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AddressModal from "./components/addressForm/AddressForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addresses" element={<Addresses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
