import { Component } from '@angular/core';
import { cardCoolingSheetService, cardGateService, cardGrillService, cardLadderService, cardSafetyDoorService } from './config';
import { CardComponent } from '../../../core/components/card/card.component';

@Component({
  selector: 'app-service-showcase',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './service-showcase.component.html',
  styleUrl: './service-showcase.component.scss'
})
export class ServiceShowcaseComponent {
  cardGrillService = cardGrillService;
  cardGateService = cardGateService;
  cardSafetyDoorService = cardSafetyDoorService;
  cardCoolingSheetService = cardCoolingSheetService;
  cardLadderService = cardLadderService;
}
