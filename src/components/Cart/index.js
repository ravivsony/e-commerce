import React, { useState } from "react";
import "../Data";
import "./index.css";
// import { FaTrash } from "react-icons/fa";
import CART from "../CartData";

const CartProducts = () => {
  const [addInCart, setAddInCart] = useState([]);

  // if (!addInCart) {
  // }

  return (
    <div>
      <h1 className="center">This is the cart</h1>
      <div className="items">
        {CART.map((product) => {
          return (
            <div key={product.id} className="item">
              <div className="product-img">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>

              <div className="price-add">
                <h5 id="product-price">${product.price}</h5>
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
