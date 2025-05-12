import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() heading : string = 'Default Heading';

  @Input() searchClass : 'simple-search' | 'lable-search' = 'simple-search';
}
