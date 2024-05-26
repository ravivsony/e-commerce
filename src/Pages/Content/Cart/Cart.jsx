import React, { useContext } from "react";
import "../../../Data";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";
import { AppData } from "../../HomePage/HomePage";

const CartProducts = () => {

  const { cart, setCart, increment, decrement } = useContext(AppData)

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div>
      <h4 style={{ fontFamily: 'Lato, sans-serif', textAlign: 'center' }}>{cart.length > 0 ? 'Cart' : 'Cart is Empty'}</h4>
      <div className="items">
        {cart && cart.map((product) => {
          return (
            <div key={product.id} className="item" style={{ height: '32.5em' }}>
              <div style={{ display: 'flex', justifyContent: 'end' }} onClick={() => removeItem(product.id)}>
                <FaTrashAlt className='trash' />
              </div>
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
                {!cart?.find(item => item.id === product.id) ? <div className="addBtn" onClick={() => addToCart(product)}>
                  + ADD
                </div> :
                  <div className="counter" >
                    <div className='minus' onClick={() => decrement(product)}><img style={{ width: 'inherit', height: 'inherit' }} src="https://gomechanic.in/spares/icons/redMinus.svg" alt="minus" srcSet="" /></div>
                    {cart?.map((item) => (product.id === item.id && <span className='count'>{item.count}</span>))}
                    <div className='plus' onClick={() => increment(product)}><img style={{ width: 'inherit', height: 'inherit' }} src="https://gomechanic.in/spares/icons/redPlus.svg" alt="plus" srcSet="" /></div>
                  </div>}
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
