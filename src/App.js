import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import React from 'react';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Banner/>
            <ProductList/>
          </React.Fragment>
        }/>
        <Route exact path='/shoppingcart' element={
          <React.Fragment>
            <ShoppingCart/>
          </React.Fragment>
        }/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
