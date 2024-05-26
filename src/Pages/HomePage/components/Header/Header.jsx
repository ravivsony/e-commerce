import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ cart }) => {
    const [index, setIndex] = useState(0);
    const classNames = ["first-header", "second-header", "third-header"];
    const [className, setClassName] = useState(classNames[index]);
    const location = useLocation()
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
    }, [index]);
    return (
        <>
            {
                location.pathname !== "/cart" ? <div className={className}>
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
                            {cart?.length ?
                                <div className='viewCart'>
                                    <FaShoppingCart style={{ color: 'black' }} className='cartIcon' />
                                    <span id="badge">{cart?.reduce((acc, curVal) => acc + curVal.count, 0)}</span>
                                </div> :
                                <div style={{ position: 'relative' }}>
                                    <FaShoppingCart className='cartIcon' />
                                </div>
                            }
                        </Link>
                    </nav>
                    <div className="header">
                        <h1 id="header-title">Shop Now</h1>
                    </div>
                </div> :
                    <div >
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
                                {cart?.length ?
                                    <div className='viewCart'>
                                        <FaShoppingCart style={{ color: 'black' }} className='cartIcon' />
                                        <span id="badge">{cart?.reduce((acc, curVal) => acc + curVal.count, 0)}</span>
                                    </div> :
                                    <div style={{ position: 'relative' }}>
                                        <FaShoppingCart className='cartIcon' />
                                    </div>
                                }
                            </Link>
                        </nav>
                    </div>

            }
        </>
    )
}

export default Header
