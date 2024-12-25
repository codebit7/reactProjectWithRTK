import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
    const cart = useSelector((state) => state.cart)
    function handleWishList(){}
  return (
    <div>
       <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="cart-wishListContainer">
        <Link className="cart-icon" to="/cart">
          {/* <img src="" alt="cart-icon" /> */}
          <FaCartShopping className='cart'/>
          <div className="cart-items-count">
            {cart.items.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>

          <div className="wishlist"><Link to="/wishlist">WishList</Link></div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
