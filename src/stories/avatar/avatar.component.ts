import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() label: string = 'Default Input';
  @Input() heading: string = 'Default heading';
  @Input() inputClass: 'avatar' = 'avatar';
}
