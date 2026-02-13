import { configureStore } from "@reduxjs/toolkit";
import logInReducer from './Logedin'
// import taskAddingReducer from './TaskCount'

export const store = configureStore({
    reducer:{
        logIn:logInReducer,
        // taskCount:taskAddingReducer
    }
})