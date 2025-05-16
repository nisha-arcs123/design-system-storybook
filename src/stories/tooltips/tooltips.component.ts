import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltips',
  imports: [CommonModule],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.scss',
})
export class TooltipsComponent {
  @Input() inputClass: 'small-width' = 'small-width';
  @Input() heading = 'Default heading';
}
