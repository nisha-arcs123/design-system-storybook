import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() inputClass: 'with-icon' | 'without-icon' | 'morebutton-icon' =
    'with-icon';
  @Input() heading = 'Default heading';
 
  
  @Input() items: { label: string; url?: string }[] = [];
}
