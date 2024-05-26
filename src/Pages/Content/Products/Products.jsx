import React, { useContext, memo } from "react";
import "./Products.css";
import { AppData } from "../../HomePage/HomePage";

const Products = memo(({ gender }) => {
  const { data, cart, setCart, increment, decrement } = useContext(AppData);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };
  return (
    <div className="content">
      <div className="items-title">
        <h4>{(data.length < 20 && gender === undefined) ? 'Filtered Collection' : 'Big Deals'}</h4>
      </div>
      <div className="items">
        {data && data.map((product, index) => (
          <React.Fragment key={index}>
            {(gender === undefined || product.gender === gender) && <div key={product.id} className="item" >
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
                {!(cart?.find(item => item.id === product.id)) || cart?.find(item => item.id === product.id)?.count === 0 ? <div className="addBtn" onClick={() => addToCart(product)}>
                  + ADD
                </div> :
                  <div className="counter" >
                    <div className='minus' onClick={() => decrement(product)}>-</div>
                    {cart.map((item) => (product.id === item.id && <span className='count'>{item.count}</span>))}
                    <div className='plus' onClick={() => increment(product)}>+</div>
                  </div>}
              </div>
            </div>}
          </React.Fragment>
        ))}
      </div>
    </div >
  );
});

export default Products;


