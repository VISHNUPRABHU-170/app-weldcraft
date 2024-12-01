import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponentModel } from './link.component.model';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;
}
