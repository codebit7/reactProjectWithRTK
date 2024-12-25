import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'


const Wishlist = () => {
    const products = useSelector((state)=>state.products)
    const wishlist = useSelector((state)=>state.wishlist)
  return (
    <div >
        <h3 className='wish-heading'>Your Favorites</h3>
        <div className="wish-container">
        { wishlist.length > 0 ?
            (
            wishlist.map((id, index) => {
                const product = products.find((item) => item.id === id);
                        
                return product ?(
                    <Product
                        key={id}
                        productId={id}
                        title ={product.title}
                        rating= {product.rating.rate}
                        price= {product.price}
                        imageUrl = {product.image}
                    />      
                ):null;         
            })        
            ) : ( <p className='no-wishlist'>No products in your wishlist</p>)
           
        } 
    </div>
    </div>
  )
}

export default Wishlist
