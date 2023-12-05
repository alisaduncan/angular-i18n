import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `
    <section>
      <div class="hero">
        <div class="hero-image"><img src="assets/img/hero-1.png" alt="Image of homemade blueberry pie" i18n-alt/></div>
      </div>
      <div class="logo-container">
        <img src="assets/img/logomark.png" alt="Logomark for Bethany's Pies" i18n-alt="logo|Logo for business@@businessLogo"/>
      </div>

      <div class="focused-message">
        <h2 i18n="site description|A description about this site's product line@@siteDescription">Pies for every occasion</h2>
        <p i18n>Visit our cafe or ship to your home</p>
      </div>
    </section>
  `,
    styleUrls: ['./hero.component.scss'],
    standalone: true
})
export class HeroComponent {
  componentText = $localize `translate menu text for example`;
}
