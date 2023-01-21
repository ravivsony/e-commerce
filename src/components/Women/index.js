//Dependencies
import React from "react";
//Internals
import "./index.css";
import WomenItems from "./WomenItems";

const WomensProducts = ({products,cart,setCart}) => (
  <div className="womens-products">
    <div className="womens-title">
      <h4>Women Items</h4>
    </div>
    <WomenItems products={products}  cart={cart} setCart={setCart}/>
  </div>
);

export default WomensProducts;
