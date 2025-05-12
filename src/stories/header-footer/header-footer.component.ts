import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header-footer',
  imports: [CommonModule],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'header' | 'subheader' | 'footer' = 'header';

}
