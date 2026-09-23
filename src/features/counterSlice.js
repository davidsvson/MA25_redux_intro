import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        increaseBy: (state, action) => {
            state.value += action.payload
        }
    }
});

export const { increase, increaseBy } = counterSlice.actions;

export default counterSlice.reducer;