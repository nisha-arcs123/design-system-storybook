import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class GridLayoutComponent {
 @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'table'  = 'table';
}
