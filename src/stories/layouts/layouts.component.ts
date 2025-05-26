import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-layouts',
  imports: [CommonModule,NgbTooltipModule,NgbDropdownModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  @Input() heading : string = "Default heading";
  @Input() inputClass : 'page1' | 'page2' | 'page3' | 'page4' | 'page5' = 'page1';

  @Output()
  onClick = new EventEmitter<Event>();
}
