import React from 'react'

import { decreaseItemQuantity, increaseItemQuantity } from '../Store/slices/cartSlice';
import { useDispatch } from 'react-redux';




const CartItem = ({productId, title, rating, price , imageUrl, quantity}) => {


  const dispatch = useDispatch()

  function handleIncrease(id){
      dispatch(increaseItemQuantity(id));
  }

  function handleDecrease(id){
    dispatch(decreaseItemQuantity(id));
}
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={title} />
       
        <h3>{title}</h3>
        <p>{rating} ★ ★ ★ ★</p>
      
      <div className="item-price">{price}</div>
      <div className="item-quantity">
        <button onClick={()=>handleIncrease(productId)}>+</button>
        <span>{quantity}</span>
        <button onClick={()=>handleDecrease(productId)}>-</button>
      </div>

      <div className="item-total">{(quantity*price).toFixed(2)}</div>
    </div>
  )
}



export default CartItem
