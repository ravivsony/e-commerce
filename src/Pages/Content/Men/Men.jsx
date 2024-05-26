//Dependencies
import React from 'react';
//Internals
import Products from "../Products/Products";

const MensProducts = () => (
  <div className="mens-products">
    <div className="mens-title">
      <h4>Men Collection</h4>
    </div>
    <Products gender={'men'} />
  </div>
);


export default MensProducts;
