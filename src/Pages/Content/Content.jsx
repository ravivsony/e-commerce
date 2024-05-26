import React, { memo } from 'react'
import { Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Men from "./Men/Men";
import Women from "./Women/Women";

const Content = memo(() => {

    return (
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
            </Routes>
        </div>

    )
})

export default Content
