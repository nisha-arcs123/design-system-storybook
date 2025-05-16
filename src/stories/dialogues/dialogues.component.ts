import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-dialogues',
  imports: [CommonModule],
  templateUrl: './dialogues.component.html',
  styleUrl: './dialogues.component.scss'
})
export class DialoguesComponent {
  @Input() inputClass: 'dialogue' = 'dialogue';
  @Input() heading = 'Default heading';
}
