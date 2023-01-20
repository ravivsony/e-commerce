// Dependencies
import React from 'react';
//Internals
import Products from '../Items';
import './index.css';

const App = ({products,cart,setCart}) => (
  <div className="content">
    <Products products={products} cart={cart} setCart={setCart} />
  </div>
);

export default App;
