import {createSlice } from '@reduxjs/toolkit'
import { productsList } from '../ProductsData'

   

 const productSlice = createSlice({
    name:"products",
    initialState:productsList,
    reducers:{}
})



export default productSlice.reducer;


