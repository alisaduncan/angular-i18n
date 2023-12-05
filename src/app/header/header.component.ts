import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    template: `
  <header>
    <h1><a routerLink="/"><img src="assets/img/logo.png" alt="Bethany's Pie Shop Logo" i18n-alt/></a></h1>
    <nav>
      <ul>
        <div>
          <li><a routerLink="/" i18n>Shop</a></li>
          <li><a routerLink="/cafe" i18n>Cafe</a></li>
        </div>
        <li><a routerLink="/cart"><img src="assets/img/cart-icon.png" alt="shopping cart" i18n-alt/></a></li>
      </ul>
    </nav>
  </header>
  `,
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class HeaderComponent {

}
