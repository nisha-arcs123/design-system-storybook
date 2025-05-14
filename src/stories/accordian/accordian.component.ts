import { Component,Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-accordian',
  imports: [CommonModule,NgbAccordionModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {

  @Input() inputClass : 'medium' | 'large'  = 'medium';
  @Input() heading = 'default Heading';
}
