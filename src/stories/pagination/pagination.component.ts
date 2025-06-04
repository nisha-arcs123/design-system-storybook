import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
  @Input() totalItems = 100;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  ngOnInit() {
    this.pageChange.emit(this.currentPage); // emit initial value if needed
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
