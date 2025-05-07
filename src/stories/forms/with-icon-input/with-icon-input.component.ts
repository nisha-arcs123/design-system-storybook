import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-with-icon-input',
  imports: [CommonModule],
  templateUrl: './with-icon-input.component.html',
  styleUrl: './with-icon-input.component.scss'
})
export class WithIconInputComponent {
  @Input() label = 'Type something...';

  @Input() heading: string = 'Default Heading';
  @Input() inputClass:  'left-img-input' | 'right-img-input' | 'both-img-input' = 'left-img-input';
}
