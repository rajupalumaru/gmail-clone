import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSilce";
import userReducer from "./userSlice";



export const store = configureStore({
    reducer: {
        mail: mailReducer,
        user: userReducer,
    },
})