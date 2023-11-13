export interface Product {
   id: number;
   image: string;
   name: string;
   description: string;
   price: number;
   refrigeration: boolean;
}

export interface FreshPie {
   id: number;
   name: string;
   image: string;
   timeRemaining: number;
 }

 export interface Cart {
   items: Product[];
   refrigerated: boolean;
   subtotal: number;
   shipping: number;
   total: number;
 }