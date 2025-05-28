import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,NgbTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'left-side-navbar' = 'left-side-navbar';

}
