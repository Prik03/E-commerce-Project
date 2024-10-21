import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product,ProductState } from "../../Types/productTypes";

const initialState:ProductState={
    productList:[],
    isLoading:false,
    error:null,
};

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProduct:(state,action:PayloadAction<Product[]>)=>{
state.productList=action.payload;
        },
        setLoading:(state,action:PayloadAction<boolean>)=>{
            state.isLoading=action.payload;
        },
        setError:(state,action:PayloadAction<string | null>)=>{
            state.error=action.payload;
        },
    },
});

export const {setError,setLoading,setProduct} =productSlice.actions;
export default productSlice.reducer;