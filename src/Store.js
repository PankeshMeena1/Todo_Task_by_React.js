import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice";


const Store = configureStore({
     reducer:{
         todo:taskReducer,
     }
});

export default Store;