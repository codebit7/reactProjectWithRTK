import React from 'react'
import Product from './Product.jsx'
import {useSelector}from 'react-redux' 
 
const Home = () => {
  const productsList = useSelector((state)=>state.products)
  console.log("Home page is running",productsList);
  
  return (
    <div className='products-container'>
      
      {
        productsList.map((product)=>{
         
          
         return( <Product
          key={product.id}
          productId={product.id}
          title ={product.title}
          rating= {product.rating.rate}
          price= {product.price}
          imageUrl = {product.image}
          />
         )
        })
      }
      
    </div>
  )
}

export default Home
