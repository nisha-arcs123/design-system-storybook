import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebars',
  imports: [CommonModule],
  templateUrl: './sidebars.component.html',
  styleUrl: './sidebars.component.scss',
})
export class SidebarsComponent {
  @Input() label: string = 'Default Input';
  @Input() heading: string = 'Default heading';
  @Input() inputClass: 'first-sidebar' = 'first-sidebar';
}
