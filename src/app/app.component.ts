import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `,
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent { }
