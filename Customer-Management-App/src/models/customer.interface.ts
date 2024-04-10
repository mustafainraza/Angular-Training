export interface Customer {
    id:Number,
    image: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    orderTotal: number;
}

export interface Item{
    id:Number,
    itemName:string,
    price:number
}