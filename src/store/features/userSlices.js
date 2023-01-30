import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const userSlice = createSlice(({
    name:"User",
    initialState:{
        user:null,
        auth:false
    },
    reducers:{
        setUsernames: (state,action) =>{
            state.user= action.payload
        },
        setAuth: (state,action) => {
            state.auth = action.payload
        }
    }
}))

export const { setUsernames, setAuth } = userSlice.actions
export default userSlice.reducer