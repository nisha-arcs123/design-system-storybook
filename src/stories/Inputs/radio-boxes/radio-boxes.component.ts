import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-radio-boxes',
  imports: [CommonModule],
  templateUrl: './radio-boxes.component.html',
  styleUrl: './radio-boxes.component.scss'
})
export class RadioBoxesComponent {
  @Input() label = 'Type something...';
  @Input() heading: string = 'Default Heading';

  @Input() inputClass: 'simple-radio' | 'rounded-radio' | 'building-radio' = 'simple-radio';
}