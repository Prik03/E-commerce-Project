import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../../Types/cartTypes";

const initialState:CartState={
items:[],
totalQuantity:0,
totalPrice:0
};


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
            additems:(state,action:PayloadAction<{id:String, Price:number}>)=>{
                const newItem= action.payload;
                state.items.push(newItem);
                state.totalQuantity+1;
                state.totalPrice+=newItem.Price;
            },
            removeItems:(state,action:PayloadAction<{id:String}>)=>{
                const id=action.payload.id;
                const existingItem=state.items.find(item =>item.id===id);
                if(existingItem){
                    state.items=state.items.filter(item=>item.id !==id);
                    state.totalQuantity-1;
                    state.totalPrice-=existingItem.Price;
                }
            }
    }
});

export const {additems,removeItems}= cartSlice.actions;
export default cartSlice;