import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header-footer',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderFooterComponent {
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'header' | 'subheader'  = 'header';

}
