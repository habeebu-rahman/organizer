import { createSlice } from "@reduxjs/toolkit";

const logInSlice = createSlice({
    name:'logIn',
    initialState:{logedIns:false},
    reducers:{
        logedIn:(state)=>{
            state.logedIns = true
            localStorage.setItem('isLogedIn','true')
        },
        logedOut:(state)=>{
            state.logedIns = false
            localStorage.setItem('isLogedIn','false')
        }
    }
})

export const {logedIn,logedOut} = logInSlice.actions
export default logInSlice.reducer