import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  imports: [CommonModule],
  templateUrl: './full-layout-page.component.html',
  styleUrl: './full-layout-page.component.scss'
})
export class FullLayoutComponent {

  @Input() inputClass : 'page-one' = 'page-one';
  @Input()  heading = 'deafult heading';
}
