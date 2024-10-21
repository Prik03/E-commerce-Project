export interface Product {
    id:string;
    name:string;
    price:number;
    description:string;
}

export interface ProductState {
    productList:Product[];
    isLoading:boolean;
    error:string | null;
}