import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { cardCoolingSheet, cardCoolingSheetService, cardGate, cardGateService, cardGrill, cardGrillService, cardLadder, cardLadderService, cardSafetyDoor, cardSafetyDoorService } from './config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardGrill = cardGrill;
  cardGate = cardGate;
  cardSafetyDoor = cardSafetyDoor;
  cardCoolingSheet = cardCoolingSheet;
  cardLadder = cardLadder;
  cardGrillService = cardGrillService;
  cardGateService = cardGateService;
  cardSafetyDoorService = cardSafetyDoorService;
  cardCoolingSheetService = cardCoolingSheetService;
  cardLadderService = cardLadderService;
}
