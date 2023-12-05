import { Component, inject } from '@angular/core';
import { PiesService } from '../pies.service';
import { NgFor, AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-shop',
    template: `
    <app-hero></app-hero>
    <section class="specials">
      <h2 i18n>Enjoy at home</h2>
      <p i18n>Freshly baked on {{today | date:'MMMM d'}}</p>
      <div class="pie-grid">
        <div class="pie-item" *ngFor="let pie of piesOfTheWeek | async">
          <img src={{pie.image}} alt="image of {{pie.name}}" i18n-alt/>
          <div class="add-to-cart">
            <p i18n>+ Add to cart</p>
          </div>
          <div class="pie-info">
            <h4>{{pie.name}}</h4>
            <p>{{pie.price | currency}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
    styleUrls: ['./shop.component.scss'],
    standalone: true,
    imports: [HeroComponent, NgFor, AsyncPipe, CurrencyPipe, DatePipe]
})
export class ShopComponent {
  private piesService = inject(PiesService);
  public piesOfTheWeek = this.piesService.getSpecials();

  public today = new Date();
}
