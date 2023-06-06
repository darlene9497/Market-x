import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Products/Product';
import Products from './components/Products/Products';
import CategoryProducts from './components/Categories/CategoryProducts';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router basename="/">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

