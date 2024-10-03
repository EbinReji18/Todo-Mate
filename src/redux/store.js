import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./taskSlice";
import taskSlice from "./taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,  
  }
});

export default store;