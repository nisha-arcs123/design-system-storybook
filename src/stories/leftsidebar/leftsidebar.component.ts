import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leftsidebar',
  imports: [CommonModule,NgbTooltipModule],
  templateUrl: './leftsidebar.component.html',
  styleUrl: './leftsidebar.component.scss'
})

export class LeftSideBarComponent {
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'left-side-bar-small' | 'left-side-bar-large' = 'left-side-bar-small';

}
