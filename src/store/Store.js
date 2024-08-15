import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slice/newsApiSlice";



export const store =configureStore({
    reducer:{
     news:newsReducer 

    }

})