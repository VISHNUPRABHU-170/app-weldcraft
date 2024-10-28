import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModel } from './button.component.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;
}
