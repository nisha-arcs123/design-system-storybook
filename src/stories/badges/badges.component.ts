import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badges',
  imports: [CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
})
export class BadgesComponent {
  @Input() label: string = 'Default Input';
  @Input() heading: string = 'Default heading';
  @Input() inputClass: 'badges' = 'badges';
}
