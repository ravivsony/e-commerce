import React, { useState, useEffect, createContext, memo } from "react";
import { useLocation } from "react-router-dom";
// Externals
import Filter from "./components/Filter/Filter";
import "./HomePage.css";
import products from "../../Data/index";
import Header from "./components/Header/Header";
import Content from "./../Content/Content";
const filters = [
  {
    id: 1,
    filter_name: 'Select Price',
    options: ['500-999', '1000-1999', '2000-2999', '3000-3999', '4000-4999'],
  },
  {
    id: 2,
    filter_name: 'Select Size',
    options: ['L', 'M', 'XL', 'XXL', 'S', 'XS']
  },
  {
    id: 3,
    filter_name: 'Select Gender',
    options: ['men', 'women']
  },
  {
    id: 4,
    filter_name: 'Select Color',
    options: ['brown', 'light brown', 'grey', 'red', 'black', 'white']
  },

]
const AppData = createContext()

const HomePage = memo(() => {

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    size: '',
    price: '',
    gender: '',
    color: '',
  });
  const [cart, setCart] = useState([])
  const location = useLocation()

  useEffect(() => {
    setData(products)
  }, [])

  const filterItems = (selectedOption) => {
    let filteredData = products;

    // Apply color filter
    if (selectedOption.color) {
      filteredData = filteredData.filter(product => product.color === selectedOption.color);
    }

    // Apply size filter
    if (selectedOption.size) {
      filteredData = filteredData.filter(product => product.size === selectedOption.size);
    }

    // Apply gender filter
    if (selectedOption.gender) {
      filteredData = filteredData.filter(product => product.gender === selectedOption.gender);
    }

    // Apply price filter
    if (selectedOption.price) {
      const [minPrice, maxPrice] = selectedOption.price.split('-').map(Number);

      filteredData = filteredData.filter(product => product.price >= minPrice && product.price <= maxPrice)
    }

    setData(filteredData);
  };

  const resetFilter = () => {
    setData(products);
    setSelectedOption({
      size: '',
      price: '',
      gender: '',
      color: '',
    });
    setSelectedFilter('');
  }
  const increment = (product) => {
    const index = cart?.findIndex(item => item.id === product.id);
    if (index === -1) {
      setCart([{ ...product, count: 1 }])
    } else {
      cart[index].count += 1;
      setCart([...cart])
    }
  }

  const decrement = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.count > 1) {
        const updatedCart = cart.map(item =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        );
        setCart(updatedCart);
      } else {
        setCart(cart.filter(item => item.id !== product.id));
      }
    }
  };

  return (
    <div>
      <AppData.Provider value={{ data, cart, setCart, increment, decrement }}>
        <Header cart={cart} />
        {location.pathname !== "/cart" &&
          <Filter
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            filters={filters}
            data={data}
            filterItems={filterItems}
            resetFilter={resetFilter}
          />}
        <Content />

        <div className="footer">
          <p>© 2021 Copyright Ravi Verma</p>
        </div>
      </AppData.Provider>
    </div>
  );
});
export default HomePage;
export { AppData }