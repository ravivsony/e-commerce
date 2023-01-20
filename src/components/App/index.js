// Dependencies
import React from 'react';
//Internals
import Products from '../Items';
import './index.css';

const App = ({products}) => (
  <div className="content">
    <Products products={products} />
  </div>
);

export default App;
