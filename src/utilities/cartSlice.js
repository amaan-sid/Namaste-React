import { createSlice } from "@reduxjs/toolkit";

// redux is state management library 
// data of redux can be accessed anywhere
// rdeux is not needed in small and medium size app

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        order : [1,2,3,4,5,6],
    },
    reducers : {
        addItem : ( state, action ) => {
            // mutating the state --> directly modifying 
         state.items.push(action.payload);
        },
        removeItem : ( state, action ) => {
            state.items.pop();
        },
        clearCart : ( state, action ) => {
            state.items.length = 0 ;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

