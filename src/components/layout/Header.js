import React from 'react'
import '../style/header.css'
import {FaAmazon} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {BiMap} from 'react-icons/bi';
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
    const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  return (
    <header className='header'>
        <Link style={{textDecoration:'none'}} to='/'>
        <div className="header_logo">
            <FaAmazon fontSize='25px'/>&nbsp;
            <span className="header_logoName">amazon<span className="header_logoNamein">.in</span></span>
        </div>
        </Link>
        <Link style={{textDecoration:'none'}} to='/'>
        <div className="header_address">
                <span className="header_nav_lineOne">Deliver to Guest</span>
                <span className="header_nav_lineTwo"><BiMap fontWeight='bold'/>&nbsp;This Address</span>
        </div>
        </Link>
        <div className="header_search">
            <input/>
            <FaSearch fontSize="40px" className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <Link style={{textDecoration:'none'}} to='/'>
            <div className="header_nav_user">
                <span className="header_nav_lineOne">Hello, Guest</span>
                <span className="header_nav_lineTwo">Sign In</span>
            </div>
            </Link>
            <Link style={{textDecoration:'none'}} to='/'>
            <div className="header_nav_orders">
                <span className="header_nav_lineOne">Returns</span>
                <span className="header_nav_lineTwo">& Orders</span>
            </div>
            </Link>
            <Link style={{textDecoration:'none'}} to='shoppingcart'><div className="header_nav_itemBasket"><FaShoppingCart fontSize='25px'/>&nbsp;  <span>{data.cartList?.length}</span>&nbsp;Cart</div></Link>
        </div>
    </header>
  )
}

export default Header