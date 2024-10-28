import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { IconComponent } from '../icon/icon.component';
import { cartIcon, favoriteIcon, signIn, signOut, userIcon } from './config';

@Component({
  selector: 'app-navigation-icons',
  standalone: true,
  imports: [MatMenuModule, IconComponent],
  templateUrl: './navigation-icons.component.html',
  styleUrl: './navigation-icons.component.scss'
})
export class NavigationIconsComponent {
  userIcon = userIcon;
  cartIcon = cartIcon;
  favoriteIcon = favoriteIcon;
  signIn = signIn;
  signOut = signOut;
  logged = false;
}
