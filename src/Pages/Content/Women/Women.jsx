//Dependencies
import React from "react";
//Internals
import Products from "../Products/Products";

const WomensProducts = () => (
  <div className="womens-products">
    <div className="womens-title">
      <h4>Women Collection</h4>
    </div>
    <Products gender={'women'} />
  </div>
);

export default WomensProducts;
