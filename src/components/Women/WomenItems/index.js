//Dependencies
import React,{useContext} from "react";
import {AppData} from '../../BaseLayout/index'

const WomenItems = () => {

  const {data,cart,setCart,increment,decrement} = useContext(AppData);

const addToCart=(product)=>{
  setCart([...cart,{...product,count:1}])
}

return (<div className="items">
    {data && data.map((product) => {
      if(product.gender==='women'){
     return ( <div key={product.id} className="item">
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
          {!cart?.find(item=>item.id===product.id)?<div className="addBtn" onClick={() => addToCart(product)}>
            + ADD
          </div>:
               <div className="counter" >
            <div className='minus' onClick={() => decrement(product)}><img style={{width: 'inherit',height: 'inherit'}} src="https://gomechanic.in/spares/icons/redMinus.svg" alt="minus" srcSet="" /></div>
            {cart.map((item)=>(product.id===item.id && <span className='count'>{item.count}</span>))}
            <div className='plus' onClick={() => increment(product)}><img style={{width: 'inherit',height: 'inherit'}} src="https://gomechanic.in/spares/icons/redPlus.svg" alt="plus" srcSet="" /></div>
          </div>}
        </div>
      </div>
      )
    }})}
  </div>
);
}

export default WomenItems;
