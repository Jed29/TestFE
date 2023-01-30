import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getStores = createAsyncThunk('store/getStore', async()=>{
    return fetch('https://swapi.dev/api/species/?page=2')
    .then((response)=>response.json())
    // .then(data => {
    //     setGoods(data?.results);
    // })
    .catch(err=>{
        console.log(err, "ini error")
    })
})


const storeSlice = createSlice(({
    name:"Store",
    initialState:{
        store:[]
    },
    extraReducers: {
        [getStores.fulfilled]:(state, action)=>{
            state.store = action.payload
        }
    }
}))

export default storeSlice.reducer