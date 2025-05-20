import { CommonModule } from '@angular/common';
import { Component,Input ,HostListener} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-footer',
  imports: [CommonModule,NgbTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderFooterComponent {
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'header' | 'subheader'  = 'header';

  
  showTooltip = window.innerWidth >= 1096;

  @HostListener('window:resize')
  onResize() {
    this.showTooltip = window.innerWidth >= 1096;
  }
}
