import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = ({cart}) => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li>
          <Link activeClassName="selected" className="nav-link" exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="selected" className="nav-link" to="/women">
            Women
          </Link>
        </li>
        <li>
          <Link activeClassName="selected" className="nav-link" to="/men">
            Men
          </Link>
        </li>
      </ul>
    </div>
    <Link to="/cart">
    <div className="shopping-cart" style={{position:'relative'}}>
      <div className="cartIcon">Checkout <FaShoppingCart /></div>
      <div><span id="badge">{cart.length>0 && cart.length}</span></div>
    </div>
    </Link>
  </nav>
);

export default Navbar;
