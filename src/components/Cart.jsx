import React from 'react'
import CartItem from './CartItem.jsx'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const products = useSelector((state=>state.products))


  return (
    <div className='cart-container'>
        <h2>Items in Your Cart</h2>
        <div className="cart-items-container">
            <div className="cart-header cart-item-container">
                <div className="cart-item">Item</div>
                <div className="item-price">Price</div>
                <div className="quantity">Quantity</div>
                <div className="total">Total</div>
            </div>
            {
                cart.items.map((item) => {
                    let product = products.find((p)=>item.id === p.id)
                return(
                    <CartItem
                     key={item.id}
                     productId={item.id}
                     title={product.title}
                     price={product.price}
                     quantity={item.quantity}
                     imageUrl={product.image}
                     rating={product.rating.rate}
                     
                     
                    
                    />
                )
                    
                })
            }
            

            <div className="cart-header cart-item-container" >
                <div></div>
                <div></div>
                <div></div>
                <div className="total">
                    $
                   {cart.total}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cart
