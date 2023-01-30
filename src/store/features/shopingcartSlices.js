import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const shopingcartSlice = createSlice(({
    name:"ShopingCart",
    initialState:{
        shopingcart:[]
    },
    reducers:{
        setShopingCart: (state,action) =>{
            state.shopingcart= action.payload
        }
    }
}))

export const { setShopingCart } = shopingcartSlice.actions
export default shopingcartSlice.reducer