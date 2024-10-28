import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { NavigationIconsComponent } from '../navigation-icons/navigation-icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, NavigationLinksComponent, NavigationIconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
