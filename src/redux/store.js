import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carsReducer, commentReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    comments: commentReducer,
    cars: carsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}