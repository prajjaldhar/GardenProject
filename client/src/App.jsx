import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardSection from "./components/CardSection/CardSection";
import Home from "./pages/Home/Home";
import ContactForm from "./components/ContactForm/ContactForm";
import Cart from "./components/Cart/Cart";
// import NavBar from './components/Nav/NavBar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
