import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lable-vali-select',
  imports: [CommonModule],
  templateUrl: './lable-vali-select.component.html',
  styleUrl: './lable-vali-select.component.scss'
})
export class LableValiSelectComponent {
@Input() label = 'Type something...';

  @Input() heading: string = 'Default Heading';
  @Input() selectClass: 'very-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'double-extra-large' | 'label-input' | 'left-img-input' | 'right-img-input' | 'both-img-input' = 'very-small';

}
