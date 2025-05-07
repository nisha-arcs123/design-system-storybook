import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './simple-input.component.html',
  styleUrl: './simple-input.component.scss'
})
export class InputComponent {
  @Input() label = 'Type something...';

  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'very-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'double-extra-large' | 'label-input' | 'left-img-input' | 'right-img-input' | 'both-img-input' = 'very-small';

}
