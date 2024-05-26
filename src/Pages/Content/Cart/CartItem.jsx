import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { AppData } from "../../HomePage/HomePage";

const CartItem = ({ product }) => {
    const { cart, setCart, increment, decrement } = useContext(AppData)

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    return (
        <div key={product.id} className="cartItem">
            {/* <div className="cart-checkbox">
      <input type="checkbox" id={`checkbox-${product.id}`} name={`checkbox-${product.id}`} />
    </div> */}
            <div>
                <img className="cartItem-img" alt={product.name} src={product.img} />
            </div>
            <div className="cartItem-details-div">
                <div className="cartItem-details">
                    <h1 id="cartItem-name">{product.name}</h1>
                    <h4 id="cartItem-description">{product.description}</h4>
                    <h5 id="cartItem-size">Size: {product.size}</h5>
                </div>
                <div className="lastSection">
                    <div style={{ margin: '0.5em 0.75rem', textAlign: 'end' }} onClick={() => removeItem(product.id)}>
                        <FaTrashAlt className='trash' />
                    </div>
                    <div className="cartPrice-add">
                        <div className="cartCounter" >
                            <div className='cartMinus' onClick={() => decrement(product)}>-</div>
                            {cart.map((item) => (product.id === item.id && <span className='count'>{item.count}</span>))}
                            <div className='cartPlus' onClick={() => increment(product)}>+</div>
                        </div>
                        <h5 id="cartItem-price">&#x20B9;{product.price}</h5>

                    </div>
                </div>

            </div>


            <br />
        </div>
    )
}

export default CartItem
