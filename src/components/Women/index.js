//Dependencies
import React from "react";
//Internals
import "./index.css";
import WomenItems from "./WomenItems";

const WomensProducts = ({products}) => (
  <div className="womens-products">
    <div className="womens-title">
      <h4>Women Items</h4>
    </div>
    <WomenItems products={products} />
  </div>
);

export default WomensProducts;
