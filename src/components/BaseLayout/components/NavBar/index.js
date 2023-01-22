import React,{useEffect} from "react";
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
    {cart?.length?
    <div className='viewCart'>
       <FaShoppingCart style={{color:'black'}} className='cartIcon' />
      <span id="badge">{cart?.reduce((acc,curVal)=> acc+ curVal.count ,0)}</span>
      </div>:
      <div style={{position:'relative'}}>
       <FaShoppingCart className='cartIcon' />
      </div>
      }
    </Link>
  </nav>
);

export default Navbar;
