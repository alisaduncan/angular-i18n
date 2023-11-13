import { Routes } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
   { path: "cafe", component: CafeComponent },
   { path: "cart", component: CartComponent },
   { path: "", component: ShopComponent },
   { path: "shop", redirectTo: "", pathMatch: "full" }
 ];
