import React, {useState, useEffect } from "react";
import "../Data";
import "./index.css";
// import { FaTrash } from "react-icons/fa";

const CartProducts = ({cart,setCart}) => {
  return (
    <div>
      <h4 className="center">{cart.length>0?'Cart Items':'Cart is Empty'}</h4>
      <div className="items">
        {cart.map((product) => {
          return (
            <div key={product.id} className="item">
              <div className="product-img">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
                <h5 id="product-size">Size: {product.size}</h5>
              </div>

              <div className="price-add">
                <h5 id="product-price">&#x20B9;{product.price}</h5>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartProducts;
