import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import ProductList from "./components/layout/ProductList";
import Footer from "./components/layout/Footer";
import ShoppingCart from "./components/layout/ShoppingCart";
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
