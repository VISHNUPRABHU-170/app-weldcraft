import { Component } from '@angular/core';
import { ProductShowcaseComponent } from '../product-showcase/product-showcase.component';
import { ServiceShowcaseComponent } from '../service-showcase/service-showcase.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductShowcaseComponent, ServiceShowcaseComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class HomeComponent {
}
