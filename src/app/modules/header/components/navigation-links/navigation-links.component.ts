import { Component } from '@angular/core';
import { LinkComponent } from '../../../core/components/link/link.component';
import { SearchComponent } from '../../../core/components/search/search.component';
import {
  contactUsConfig,
  homeLinkConfig,
  productsLinkConfig,
  servicesLinkConfig
} from './config';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [LinkComponent, SearchComponent],
  templateUrl: './navigation-links.component.html',
  styleUrl: './navigation-links.component.scss'
})
export class NavigationLinksComponent {
  homeLinkConfig = homeLinkConfig;
  productsLinkConfig = productsLinkConfig;
  servicesLinkConfig = servicesLinkConfig;
  contactUsConfig = contactUsConfig;
}
