import React, {useContext } from "react";
import "../Data";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";
import { AppData } from "../BaseLayout";

const CartProducts = () => {
  
  const {cart,setCart}=useContext(AppData)
  const removeItem=(id)=>{
    setCart(cart.filter(item=>item.id!==id))
  }

  return (
    <div>
      <h4 className="center">{cart.length>0?'Cart':'Cart is Empty'}</h4>
      <div className="items">
        {cart && cart.map((product) => {
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
                <div onClick={()=>removeItem(product.id)}>
                <FaTrashAlt className='trash' />
                </div>
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
