import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lable-select',
  imports: [CommonModule],
  templateUrl: './lable-select.component.html',
  styleUrl: './lable-select.component.scss',
})
export class LableSelectComponent {
  @Input() heading: string = 'Default input';
  @Input() label: string = 'Enter input here';
  @Input() selectClass:
    | 'very-small-label'
    | 'small-label'
    | 'medium-label'
    | 'large-label'
    | 'extra-large-label'
    | 'double-extra-large-label' = 'very-small-label';
}
