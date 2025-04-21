import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoffeeRoastTypesComponent } from './components/coffee-roast-types/coffee-roast-types.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SummaryComponent, HorizontalScrollComponent, FooterComponent, CoffeeRoastTypesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coffee-shop-web-page';
}
