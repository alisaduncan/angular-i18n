import { HttpClient } from '@angular/common/http';
import { Injectable, LOCALE_ID, inject } from '@angular/core';
import { Cart, FreshPie, Product } from './product';
import { Observable, map } from 'rxjs';

export const API = './api/';
export const PRODUCTS_URL = 'products.json';
@Injectable({
  providedIn: 'root'
})
export class PiesService {
  private http = inject(HttpClient);
  private locale = inject(LOCALE_ID);

  constructor() { }
  private formURL(): string {
    let url = `${API}${PRODUCTS_URL}`;
    if (this.locale !== 'en-US') {
      url = `${API}${this.locale}/${PRODUCTS_URL}`;
    }

    return url
  }

  getSpecials(): Observable<Product[]> {
    return this.http.get<Product[]>(this.formURL()).pipe(
      map(products => products.filter(p => p.id < 4))
    );
  }

  getFresh(): Observable<FreshPie[]> {
    let inProcess: FreshPie[] = [
      { id: 4, timeRemaining: 50, name: '', image: '' },
      { id: 1, timeRemaining: 5, name: '', image: ''},
      { id: 5, timeRemaining: 0, name: '', image: '' }
    ];

    return this.http.get<Product[]>(this.formURL()).pipe(
      map(products => products.filter(p => inProcess.find(i => i.id === p.id))),
      map(products => inProcess.map(fresh => ({
        ...fresh, 
        name: (products.find(p => p.id === fresh.id) as Product).name, 
        image: (products.find(p => p.id === fresh.id) as Product).image
      })))
    );
  }

  getCart(): Observable<Cart> {

    const cartItemIds = [1, 3, 4 ];

    return this.http.get<Product[]>(this.formURL()).pipe(
      map(products => products.filter(p => cartItemIds.includes(p.id))),
      map(items => {
        const refrigerated = items.some(pie => pie.refrigeration);
        const shipping = refrigerated ? 25 : 15; // API should return this value, or add better calculation
        const subtotal = Math.round(items.reduce((acc, curr) => acc += curr.price, 0));

        const cart: Cart = { items, subtotal, refrigerated, shipping,
          total: shipping + subtotal
        };
        
        return cart;
      }),

    );
  }
}
