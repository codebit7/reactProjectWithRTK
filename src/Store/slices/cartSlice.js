import { createSlice } from "@reduxjs/toolkit"

import { productsList } from "../ProductsData";


function updatePrice(state,id)
{
    const products = productsList;
    return  state.items.reduce((acc, item)=>{
        const product =products.find(p=> p.id ===id)
        return acc + (product.price * item.quantity)
    },0)
    
}






const initialState = {
    items:[],
    total:0
}



const cartSlice = createSlice({
      name:'cart',
      initialState,
      reducers:{
        addCartItem:(state, action)=>
        {
           
            const existingItem = state.items.find(item => item.id === action.payload.id);

           if (existingItem) {
               existingItem.quantity += action.payload.quantity; // Directly update quantity
            } else {
               state.items.push(action.payload); // Add new item
            }
            
           state.total = updatePrice(state,action.payload.id);
        },

        increaseItemQuantity:(state, action)=>{
               
            const item =  state.items.find((i)=>i.id ===action.payload)
            if(item)
            {
                item.quantity +=1;
            }

            state.total = updatePrice(state,action.payload);
        },

        decreaseItemQuantity:(state, action)=>{
             
            const item =  state.items.find((i)=>i.id ===action.payload)
            if(item && item.quantity > 1)
            {
                item.quantity -=1;
            }
            else{
                state.items = state.items.filter((i)=>i.id !== action.payload)
            }

        state.total = updatePrice(state,action.payload);
        },

        removeCartItem:(state, action)=>{
            state.items = state.items.filter((i)=>i.id !== action.payload)
            state.total = updatePrice(state,action.payload)
        }
        
      }
})



export const {increaseItemQuantity,
             decreaseItemQuantity,
             addCartItem,
             removeCartItem,
        } = cartSlice.actions;

export default cartSlice.reducer;