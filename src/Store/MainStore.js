// import {combineReducers, createStore} from 'redux'
// import { productsList } from './ProductsData'
// import { CART_ADD_ITEM, CART_ITEM_INCREASE_QUANTITY,CART_ITEM_DECREASE_QUANTITY ,CART_REMOVE_ITEM} from './actions';
// import { REMOVE_FROM_WISHLIST,ADD_TO_WISHLIST } from './actions';

import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import wishlistSlice from './slices/wishlistSlice';

export  const store =configureStore({
  reducer:{
    products:productSlice,
    cart:cartSlice,
    wishlist:wishlistSlice
  }
})



//  function reducer(state = initialState,action){
//     let totalUpdated, updatedItems;;
//       switch (action.type) {

//         case CART_ADD_ITEM:
//              const {id, quantity} = action.payload;
             
             
//              const existingItem = state.cart.items.find((item)=> item.id === id) 
             
             
//              if(existingItem)
//              {
//               updatedItems = state.cart.items.map((item)=>{
//                        if(item.id === existingItem.id)
//                        {
//                         return {...item,quantity:item.quantity + 1}
//                        }
//                        return item;
//                 })
//              }
//              else{
//                 updatedItems = [...state.cart.items,{id,quantity}]
//              }
             
             
//             totalUpdated = updatedItems.reduce((acc,item)=>{
//             const product = state.products.find((p)=>p.id === item.id)
//                return  acc + (product.price * item.quantity)
//              },0)
             
//              return {
//                 ...state,
//                 cart:{
                
//                     items:updatedItems,
//                     total: totalUpdated
//                 }
//              }
          

//             case CART_REMOVE_ITEM:
//                 const filteredItems = state.cart.items.filter((item)=> item.id !== id)

//                 totalUpdated = filteredItems.reduce((acc,item)=>{
//                 const product = state.products.find((p)=>p.id === item.id)
//                        return  acc + product.price * item.quantity
//                      },0)
                
//             return {
//                ...state,
//               cart:{
//                   items: filteredItems,
//                   total: totalUpdated
//                     }
//              }
      
//             case CART_ITEM_INCREASE_QUANTITY:
//                 updatedItems = state.cart.items.map(
//                     (item)=>{
//                         if(item.id === action.payload.productId) 
//                         {
//                             return {...item, quantity:item.quantity + 1}
//                         }
//                         return item;
//                     }
//                 )
                

//                 totalUpdated = updatedItems.reduce((acc,item)=>{
//                     const product = state.products.find((p)=>p.id === item.id)
//                            return  acc + product.price * item.quantity
//                          },0)

//                 return{
//                     ...state,
//                     cart:{
//                         items:updatedItems,
//                         total:parseFloat(totalUpdated.toFixed(2))
//                     }
//                 }


//              case CART_ITEM_DECREASE_QUANTITY:
//                  updatedItems = state.cart.items.map(
//                     (item)=>{
//                         if(item.id === action.payload.productId) 
//                         {
//                             return {...item, quantity:item.quantity - 1}
//                         }
//                         return item;
//                     }
//                 ).filter((item)=>item.quantity > 0)
                

//                 totalUpdated = updatedItems.reduce((acc,item)=>{
//                     const product = state.products.find((p)=>p.id === item.id)
//                            return  acc + product.price * item.quantity
//                          },0)
                         
//                 return{
//                     ...state,
//                     cart:{
//                         items:updatedItems,
//                         total:totalUpdated
//                     }
//                 }

//             // wishlist code

//             case ADD_TO_WISHLIST:
//                 if (!state.wishlist.includes(action.payload)) {
//                   return {
//                     ...state,
//                     wishlist: [...state.wishlist, action.payload],
//                   };
//                 }
//                 return state;
          
//               case REMOVE_FROM_WISHLIST:
//                 return {
//                   ...state,
//                   wishlist: state.wishlist.filter(id => id !== action.payload),
//                 };
                        
//         default:
//            return state;
//       }  
    
//  }

  // export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__())