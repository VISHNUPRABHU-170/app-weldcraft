import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModel } from './button.component.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;
}
