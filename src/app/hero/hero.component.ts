import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `
    <section>
      <div class="hero">
        <div class="hero-image"><img src="assets/img/hero-1.png" alt="Image of homemade blueberry pie"/></div>
      </div>
      <div class="logo-container">
        <img src="assets/img/logomark.png" alt="Logomark for Bethany's Pies" />
      </div>

      <div class="focused-message">
        <h2>Pies for every occasion</h2>
        <p>Visit our cafe or ship to your home</p>
      </div>
    </section>
  `,
    styleUrls: ['./hero.component.scss'],
    standalone: true
})
export class HeroComponent { }
