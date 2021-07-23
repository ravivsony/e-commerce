//Dependencies
import React from "react";
import { FaCartPlus } from "react-icons/fa";
//Internals
import PRODUCTS from "../../Data";

const ClothesItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.category === "clothes") {
        return (
          <div className="item">
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
            </div>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <FaCartPlus id="add-icon" style={{ fontSize: "x-large" }} />
            </div>
          </div>
        );
      }
    })}
  </div>
);

export default ClothesItems;
