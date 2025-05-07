import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-check-boxes',
  imports: [CommonModule],
  templateUrl: './check-boxes.component.html',
  styleUrl: './check-boxes.component.scss'
})
export class CheckBoxesComponent {
  @Input() label = 'Type something...';
  @Input() heading: string = 'Default Heading';

  @Input() inputClass: 'simple-checkbox' | 'rounded-checkbox' | 'square-checkbox' | 'building-box' = 'simple-checkbox';
}
