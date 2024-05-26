import React, { useContext } from "react";
import "../../../Data";
import "./Cart.css";
import { AppData } from "../../HomePage/HomePage";
import CartItem from "./CartItem";

const CartProducts = () => {

  const { cart } = useContext(AppData)


  return (
    <div>
      <h4 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center' }}>{cart.length > 0 ? 'Cart' : 'Cart is Empty'}</h4>
      <div className="cart-container">
        <div className="cart-list">
          {cart && cart.map((product) => {
            return (
              <>
                {cart?.find(item => item.id === product.id)?.count !== 0 &&
                  <CartItem product={product} />}
              </>
            );
          })}
        </div>
        <div className="order-summary">

        </div>
      </div>
    </div>
  );
};

export default CartProducts;
