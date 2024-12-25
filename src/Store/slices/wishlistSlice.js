import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
      addTowishList: (state, action) => {
        if (!state.includes(action.payload)) {
          state.push(action.payload);
        }
      },
      removeFromWishList: (state, action) => {
        const index = state.indexOf(action.payload);
        if (index > -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  
  export const { addTowishList, removeFromWishList } = wishlistSlice.actions;
  export default wishlistSlice.reducer;
  