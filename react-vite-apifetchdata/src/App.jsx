import React from 'react'
// import CustomApp from './7/app';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Product from './8/product';
import ProductDetail from './8/productdetail';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path={`/product/:id`} element={<ProductDetail/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
