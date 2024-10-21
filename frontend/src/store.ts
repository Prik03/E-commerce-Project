import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({
reducer:{
    cart:cartReducer,
    products:preoductReducer,
    user:userReducer
},
});

export type RootState=ReturnType<typeof store.getState>;
export type AddDispatch= typeof store.dispatch;

export default store;