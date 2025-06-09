import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  imports: [CommonModule,NgbTooltip],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() inputClass: 'primary' | 'secondary' = 'primary';
  @Input() heading = 'Default heading';
}
