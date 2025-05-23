
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  imports: [CommonModule,NgbAlertModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() label: string = 'Default Input';
  @Input() heading: string = 'Default heading';
   @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  // @Input() dismissible = true;
  breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Library', url: '/library' },
  { label: 'Data', url: '/library/data' }
];
}
