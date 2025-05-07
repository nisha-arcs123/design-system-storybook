import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [CommonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input() label = 'Type something...';
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'checkbox' | 'radio' | 'date&time' | 'switch' = 'checkbox';
}
