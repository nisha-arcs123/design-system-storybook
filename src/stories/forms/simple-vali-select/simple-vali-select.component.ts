import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-simple-vali-select',
  imports: [CommonModule],
  templateUrl: './simple-vali-select.component.html',
  styleUrl: './simple-vali-select.component.scss'
})
export class SimpleValiSelectComponent {
@Input() label = 'Type something...';

  @Input() heading: string = 'Default Heading';
  @Input() selectClass: 'very-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'double-extra-large' | 'label-input' | 'left-img-input' | 'right-img-input' | 'both-img-input' = 'very-small';

}
