import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule,NgbPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() inputClass: 'pagination1' | 'pagination2' = 'pagination1';
  @Input() heading = 'Default heading';
  page =1;
}
