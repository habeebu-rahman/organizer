import { configureStore } from "@reduxjs/toolkit";
import logInReducer from './Logedin'
import themeReducer from './ReduxTheme'
// import taskAddingReducer from './TaskCount'

export const store = configureStore({
    reducer:{
        logIn:logInReducer,
        theme:themeReducer
        // taskCount:taskAddingReducer
    }
})