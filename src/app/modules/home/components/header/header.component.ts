import { Component } from '@angular/core';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { bookServiceButtonConfig, exploreProductsButtonConfig } from './config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  exploreProductsButtonConfig = exploreProductsButtonConfig;
  bookServiceButtonConfig = bookServiceButtonConfig;
}
