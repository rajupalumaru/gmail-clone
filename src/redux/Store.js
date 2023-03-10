import { configureStore } from "@reduxjs/toolkit";
import mailSilce from "./mailSilce";



export const store = configureStore({
    reducer: {
        mail: mailSilce,
    },
})