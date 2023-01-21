import React, { useState, useEffect,createContext,useContext } from "react";
// Externals
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter/Filter";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Cart from "../Cart";
import Women from "../Women";
import Men from "../Men";
import products from "../Data/index";
const filters=[
  {
      id:1,
      filter_name:'Select Price',
      options:['500-999','1000-1999','2000-2999','3000-3999','4000-4999']
  },
  {
      id:2,
      filter_name:'Select Size',
      options:['L','M','XL','XXL','S','XS']
  },
  {
      id:3,
      filter_name:'Select Gender',
      options:['men','women']
  },
  {
      id:4,
      filter_name:'Select Color',
      options:['brown','light brown','grey','red','black','white']
  },

]
const AppData=createContext()

const BaseLayout = () => {
  const [index, setIndex] = useState(0);
  const classNames = ["first-header", "second-header", "third-header"];
  const [className, setClassName] = useState(classNames[index]);
  const [data, setData] = useState([]);
  const[selectedFilter,setSelectedFilter]=useState('')
  const[selectedOption,setSelectedOption]=useState({
    size: '',
    price: '',
    gender: '',
    color: '',
  });
  const [cart, setCart] = useState([])
  let latestIndex = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const timer = setInterval(latestIndex, 3000);
    setClassName(classNames[index]);
    if (index > 2) {
      setIndex(0);
      setClassName(classNames[index]);
    }
    return () => clearInterval(timer);
  });
  useEffect(() => {
    setData(products)
  }, [])
  
  const filterItems=(filterFor)=>{
    if(filterFor.includes('500-999')){
      setData(data && data.filter(obj=>(filterFor.includes(obj.color) && filterFor.includes(obj.size) && filterFor.includes(obj.gender) && (obj.price>500 && obj.price<=999))))
    }
    else if(filterFor.includes('1000-1999')){
      setData(data && data.filter(obj=>(filterFor.includes(obj.color) && filterFor.includes(obj.size) && filterFor.includes(obj.gender) && (obj.price>1000 && obj.price<=1999))))
    }
    else if(filterFor.includes('2000-2999')){
      setData(data && data.filter(obj=>(filterFor.includes(obj.color) && filterFor.includes(obj.size) && filterFor.includes(obj.gender) && (obj.price>2000 && obj.price<=2999))))
    }
    else if(filterFor.includes('3000-3999')){
      setData(data && data.filter(obj=>(filterFor.includes(obj.color) && filterFor.includes(obj.size) && filterFor.includes(obj.gender) && (obj.price>3000 && obj.price<=3999))))
    }
    else if(filterFor.includes('4000-4999')){
      setData(data && data.filter(obj=>(filterFor.includes(obj.color) && filterFor.includes(obj.size) && filterFor.includes(obj.gender) && (obj.price>4000 && obj.price<=4999))))
    } else{
      setData(data)
    }
  }
  const resetFilter=()=>{
    setData(products);
    setSelectedOption({
      size: '',
      price: '',
      gender: '',
      color: '',
    });
    setSelectedFilter('');
  }
  return (
    <div>
      <div className={className}>
        <Navbar cart={cart} />
        <Header />
      </div>
      {window.location.pathname!=="/cart" &&
      <Filter 
        selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        filters={filters} 
        data={data} 
        filterItems={filterItems} 
        resetFilter={resetFilter}
      />}
      <div className="content"> 
      <AppData.Provider value={{data,cart,setCart}}>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
        </Routes>
      </AppData.Provider>
      </div>
      <Footer />
    </div>
  );
};
export default BaseLayout;
export {AppData}