import { configureStore } from "@reduxjs/toolkit";
import logInReducer from './Logedin'

export const store = configureStore({
    reducer:{
        logIn:logInReducer
    }
})