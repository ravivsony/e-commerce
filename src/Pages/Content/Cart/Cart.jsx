import React, { useContext } from "react";
import "../../../Data";
import "./Cart.css";
import { AppData } from "../../HomePage/HomePage";
import CartItem from "./CartItem";

const CartProducts = () => {

  const { cart } = useContext(AppData)


  return (
    <div style={{minHeight:'80vh'}}>
      <h4 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center' }}>{cart.length > 0 ? 'Cart' : 'Cart is Empty'}</h4>
      <div className="cart-container">
        <div className="cart-list">
          <div style={{maxHeight:'600px'}}>
          {cart && cart.map((product) => {
            return (
              <>
                {cart?.find(item => item.id === product.id)?.count !== 0 &&
                  <CartItem product={product} />}
              </>
            );
          })}
          </div>
        </div>
        {cart.length?       
        <div className="order-summary">
          <div style={{ padding: '1rem', border:'1px solid #e73c33', borderRadius:'8px'}}>
            <div className="summary-header">Order Summary</div>
            <div className="summary-section">
              <div className="summary-label">
                <div>SUBTOTAL</div>
                <div>TAX</div>
                <div>TOTAL</div>
              </div>
              <div className="summary-price">
                <div>&#x20B9;1200</div>
                <div>&#x20B9;50</div>
                <div>&#x20B9;1250</div>
              </div>
            </div>
            <div className="checkout-button">
              <button>Checkout</button>
            </div>
          </div>
          
     
         

        </div>:<></>}
  
      </div>
    </div>
  );
};

export default CartProducts;
