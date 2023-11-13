import { Component, inject } from '@angular/core';
import { Cart } from '../product';
import { PiesService } from '../pies.service';
import { Observable } from 'rxjs';
import { NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe, CurrencyPipe]
})
export class CartComponent {
  private pieService = inject(PiesService);
  public cart$: Observable<Cart> = this.pieService.getCart();
}
