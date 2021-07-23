//Dependencies
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import map from "lodash/map";
//Internals
import PRODUCTS from "../../Data";
import CART from "../../CartData";
import "../index.css";

const getCart = (product) => {
  CART.push(product);
};

const AllItems = () => (
  <div className="items">
    {map(PRODUCTS, (product) => (
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
          <div onClick={() => getCart(product)}>
            <FaCartPlus id="add-icon" style={{ fontSize: "x-large" }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AllItems;
