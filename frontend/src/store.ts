import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './redux/slices/cartSlice';
import productReducer from './redux/slices/productSlice';
// import userReducer from './redux/slices/userSlice';

const store=configureStore({
reducer:{
    cart:cartReducer,
    products:productReducer,
    // user:userReducer
},
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

export default store;