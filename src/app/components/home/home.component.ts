import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatCardModule } from '@angular/material/card';
import { IconComponent } from '../icon/icon.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, IconComponent, MatButtonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
