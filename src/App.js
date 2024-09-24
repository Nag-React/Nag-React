import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Items from './Items';
import Example1 from './Example1.js';
import Example2 from './Example2.js';
import Login from './Login.js';
import Forms from './Forms.js';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import Api1 from './Api1.js';
import Api2 from './Api2.js';
import Footer from './Footer.js';
import Products from './Products.js';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Example1" element={<Example1 />} />
          <Route path="/Example2" element={<Example2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items" element={<Items />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Form1" element={<Form1 />} />  
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Api1" element={<Api1 />} />
          <Route path="/Api2" element={<Api2 />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
