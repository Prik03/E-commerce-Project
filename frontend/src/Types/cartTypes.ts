export interface CartItem{
    id:String;
    Price:number;
};

export interface CartState{
    items:CartItem[];
    totalQuantity:number;
    totalPrice:number;
}