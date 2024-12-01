import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { NavigationIconsComponent } from '../navigation-icons/navigation-icons.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, LogoComponent, NavigationLinksComponent, NavigationIconsComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class HeaderComponent {

}
