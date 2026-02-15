import { configureStore } from "@reduxjs/toolkit";
import logInReducer from './Logedin'
import themeReducer from './ReduxTheme'
import taskFetchReducer from './ApiFetching'
// import taskAddingReducer from './TaskCount'

export const store = configureStore({
    reducer:{
        logIn:logInReducer,
        theme:themeReducer,
        tasks:taskFetchReducer
        // taskCount:taskAddingReducer
    }
})