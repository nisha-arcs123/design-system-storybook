import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-simple-select',
  imports: [CommonModule],
  templateUrl: './simple-select.component.html',
  styleUrl: './simple-select.component.scss'
})
export class SimpleSelectComponent {
 @Input() label = 'Type something...';

  @Input() heading: string = 'Default Heading';
  @Input() selectClass: 'very-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'double-extra-large' | 'label-input' | 'left-img-input' | 'right-img-input' | 'both-img-input' = 'very-small';

}
