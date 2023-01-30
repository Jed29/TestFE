import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const datauserSlice = createSlice(({
    name:"DataUser",
    initialState:{
        datauser:[]
    },
    reducers:{
        setDataUser : (state,action) =>{
            state.datauser = action.payload
        }
    },
}))

export const { setDataUser } = datauserSlice.actions
export default datauserSlice.reducer