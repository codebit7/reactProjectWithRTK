import React from 'react'
import { addCartItem} from'../Store/slices/cartSlice'
import {addTowishList, removeFromWishList } from '../Store/slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'


import { FaHeart, FaRegHeart } from 'react-icons/fa';
const Product = ({productId,title, rating, price , imageUrl}) => {

  const dispatch =useDispatch()
  const isWished = useSelector((state) => state.wishlist.includes(productId));

  function handleAddCart(id, quantity){
         const item = {id, quantity}
         dispatch(addCartItem(item));
  }
 
  
  function handleToggle(id) {
    if (isWished) {
      console.log("Removing from wishlist:", id);
      dispatch(removeFromWishList(id));
    } else {
      console.log("Adding to wishlist:", id);
      dispatch(addTowishList(id));
    }
  }
  return (

    <div className='product'>
       
       <button onClick={()=>handleToggle(productId)} style={{ fontSize: '24px', cursor: 'pointer', border: 'none', background: 'none' }}>
        {isWished ? <FaHeart color="red" /> : <FaRegHeart  />}

      </button>
      <div className='product-image'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
            <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>

      <div className="cta-container">
        <button onClick={()=>handleAddCart(productId,1)}>addCartItem</button>
        
      </div>
    </div>
  )
}

export default Product
