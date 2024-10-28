import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [LinkComponent, SearchComponent],
  templateUrl: './navigation-links.component.html',
  styleUrl: './navigation-links.component.scss'
})
export class NavigationLinksComponent {

}
