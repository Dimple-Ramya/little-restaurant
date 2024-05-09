import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartObj: {}
    },
    reducers: {
        addItem: (state, action) => {
            // action.payload in state.cartObj ?
            //     state.cartObj[action.payload] = state.cartObj[action.payload] + 1
            //     // console.log(action.payload,"is there")
            //     :
            //     // console.log(action.payload,"is added")
            //     state.cartObj[action.payload] = 1

            if (action.payload in state.cartObj) {
                state.cartObj[action.payload] = state.cartObj[action.payload] + 1
            } else {
                state.cartObj[action.payload] = 1
            }
            // console.log(state)
        }
    }
})


export const { addItem } = cartSlice.actions
export default cartSlice.reducer