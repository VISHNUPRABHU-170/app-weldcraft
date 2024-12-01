import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { IconComponentModel } from './icon.component.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() data!: IconComponentModel;
}
