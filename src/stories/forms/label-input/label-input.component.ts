import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-label-input',
  imports: [CommonModule],
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.scss'
})
export class LabelInputComponent {

  @Input() heading :string ='Default input';
  @Input() label:string = "Enter input here";
  @Input() inputClass: 'very-small-label' | 'small-label' | 'medium-label' | 'large-label' | 'extra-large-label' | 'double-extra-large-label'  = 'very-small-label';
}
