export interface CartItem{
    name:String;
    id:String;
    Price:number;
};

export interface CartState{
    items:CartItem[];
    totalQuantity:number;
    totalPrice:number;
}