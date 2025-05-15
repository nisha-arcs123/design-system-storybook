import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-layouts',
  imports: [CommonModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  @Input() heading : string = "Default heading";
  @Input() inputClass : 'page1' | 'page2' = 'page1';
}
