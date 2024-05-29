import React, { memo } from 'react'
import { Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Men from "./Men/Men";
import Women from "./Women/Women";
// import Checkout from './Checkout/Checkout'

const Content = memo(() => {

    return (
        <Routes>
            <Route exact path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            {/* <Route path="/cart/checkout" element={<Checkout />} /> */}
        </Routes>

    )
})

export default Content
