//Dependencies
import React from 'react';
//Internals
import MenItems from './MenItems';
import './index.css';

const MensProducts = ({products}) => (
  <div className="mens-products">
    <div className="mens-title">
      <h4>Men Items</h4>
    </div>
    <MenItems products={products} />
  </div>
);


export default MensProducts;
