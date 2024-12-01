import { Component } from '@angular/core';
import { cardCoolingSheet, cardGate, cardGrill, cardLadder, cardSafetyDoor } from './config';
import { CardComponent } from '../../../core/components/card/card.component';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.scss'
})
export class ProductShowcaseComponent {
  cardGrill = cardGrill;
  cardGate = cardGate;
  cardSafetyDoor = cardSafetyDoor;
  cardCoolingSheet = cardCoolingSheet;
  cardLadder = cardLadder;
}
