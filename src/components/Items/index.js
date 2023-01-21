import React from "react";
import AllItems from "./AllItems";
import "./index.css";

const Products = ({products,cart,setCart}) => {
  return (
    <div>
      <div className="items-title">
        <h4>{products.length<20?'Filtered items':'All Items'}</h4>
      </div>
      <AllItems products={products} cart={cart} setCart={setCart}  />
    </div>
  );
};

export default Products;


