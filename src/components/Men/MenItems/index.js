//Dependencies
import React,{useState,useContext} from "react";
import { AppData } from "../../BaseLayout";

const MenItems = () => {

const [counter, setCounter] = useState({
  count:0,
  id:null
})
// const [selectedProduct, setSelectedProduct] = useState({})
const {data,cart,setCart}=useContext(AppData)
const addToCart = (product) => {
  setCart([...cart,product])
  cart && cart.map((item)=>{
    if(item.id===product.id){
      setCounter({...counter,id:product.id,count:counter.count+1})
      // setSelectedProduct(product.id)
    }
  })
  console.log('addtocart',cart)
};
const handleCounter=(operation,product)=>{
  cart && cart.map((item)=>{
    if(item.id===product.id && operation==='minus'){
      setCounter({...counter,id:product.id,count:counter.count-1})
      let arr=cart.splice(1,product.id)
      setCart(arr)
    }
    else if(item.id===product.id && operation==='plus' ){
      setCounter({...counter,id:product.id,count:counter.count+1})
      setCart([...cart,product])
    }
  })
  console.log(cart)
}

return (<div className="items">
    {data && data.map((product) => {
      if(product.gender==='men'){
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
          {counter.count===0?<div className="addBtn" onClick={() => addToCart(product)}>
            + ADD
          </div>:  <div className="counter" >
            <div className='minus' onClick={() => handleCounter('minus',product)}><img style={{width: 'inherit',height: 'inherit'}} src="https://gomechanic.in/spares/icons/redMinus.svg" alt="minus" srcset="" /></div>
            <span className='count'>{counter.count}</span>
            <div className='plus' onClick={() => handleCounter('plus',product)}><img style={{width: 'inherit',height: 'inherit'}} src="https://gomechanic.in/spares/icons/redPlus.svg" alt="plus" srcset="" /></div>
          </div>}
        </div>
      </div>)
      }
    })}
  </div>
);
}

export default MenItems;
