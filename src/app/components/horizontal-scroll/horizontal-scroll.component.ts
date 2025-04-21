import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-horizontal-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.scss'
})
export class HorizontalScrollComponent {
  @Input() items: string[] = ["DOPPIO", "LATTE", "CAPPUCCINO", "MOCHA", "AMERICANO", "ESPRESSO", "FRAPPE"];

  ngOnInit() {

  }
}
