import React, { useContext, useState, useEffect } from "react";
import "../../../Data";
import "./Cart.css";
import { AppData } from "../../HomePage/HomePage";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaAngleLeft } from "react-icons/fa";

const CartProducts = () => {
    const [cartAmount, setCartAmount] = useState({})
    const { cart, setCart } = useContext(AppData)
    const navigate = useNavigate()

    useEffect(() => {
        if (cart?.length > 0) {
            let sum = 0
            let temp = cart.reduce((acc, cartItem) => {
                sum += cartItem.price
                acc.subTotal = sum;
                acc.tax = sum * 18 / 100
                acc.totalAmount = sum + acc.tax
                return acc
            }, {})
            setCartAmount(temp)
        }

    }, [cart])

    const emptyCart = (cart) => {
        setCart([])
    }
    return (
        <>
            {cart.length > 0 ?
                <div className="cart-container">
                    <div className="cart-list-header" onClick={() => navigate("/")}>
                        <FaAngleLeft className="cart-arrow" /><span>Cart</span>
                        {/* <div style={{ fontFamily: 'Lato, sans-serif', marginTop: '0.5em', textAlign: 'end' }} onClick={() => emptyCart(cart)}>
                                <FaTrashAlt className='trash' />
                            </div> */}
                    </div>
                    <div className="cart-list">

                        <div className="scrollable-cartList">
                            {cart.map((product) => {
                                return (
                                    <>
                                        {cart?.find(item => item.id === product.id)?.count !== 0 &&
                                            <CartItem product={product} />}
                                    </>
                                );
                            })}
                        </div>
                        <div className="cart-summary">
                            <div className="cart-summary-inner" >
                                <div className="summary-header">Order Summary</div>
                                <div className="summary-section">
                                    <div className="summary-label">
                                        <div>SUBTOTAL</div>
                                        <div>GST (18%)</div>
                                        <div>SHIPPING</div>
                                        <div>TOTAL</div>
                                    </div>
                                    <div className="summary-price">
                                        <div>&#x20B9;{cartAmount.subTotal}</div>
                                        <div>&#x20B9;{cartAmount.tax}</div>
                                        <div>FREE</div>
                                        <div>&#x20B9;{cartAmount.totalAmount}</div>
                                    </div>
                                </div>
                                <div className="checkout-button">
                                    <button onClick={() => navigate("/cart/checkout", { state: { cart, cartAmount } })}>Checkout</button>
                                </div>
                            </div>




                        </div>
                    </div>

                </div>
                : <></>}
        </>
    );
};

export default CartProducts;
