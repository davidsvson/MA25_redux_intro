import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    //[{id: 4, name: "banan", price: 10, quantity: 1 },{} ]
    cartItems: [{id: 4, name: "banan", price: 10, quantity: 1 }]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem 
        addItem: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if(existingItem) { // 1. om NewItem finns i cart => quantity += 1
                existingItem.quantity += 1;
            } else { // 2. om newItem inte finns i cart => lägg till object + sätt quantity till 1

                state.cartItems.push({
                    ...newItem,
                    quantity: 1
                })
            }
        }

        // removeItem
        // IncreaseItemQuantity
        // DecreaseItemQuantity
        // AddDiscount
        // SetItemQuantity
        // clearCart
    }
})

export const { addItem} = cartSlice.actions;

export default cartSlice.reducer;