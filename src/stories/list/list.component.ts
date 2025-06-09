import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
@Input() inputClass: 'simple-list' | 'icon-list'  | 'initials' | 'multiselect' | 'download' | 'signout' = 'simple-list';
  @Input() heading = 'Default heading';
}

