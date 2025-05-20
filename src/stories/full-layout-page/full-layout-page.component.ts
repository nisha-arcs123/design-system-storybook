import { CommonModule } from '@angular/common';
import { Component,Input ,HostListener} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-layout',
  imports: [CommonModule,NgbTooltipModule],
  templateUrl: './full-layout-page.component.html',
  styleUrl: './full-layout-page.component.scss'
})
export class FullLayoutComponent {

  @Input() inputClass : 'page-one' = 'page-one';
  @Input()  heading = 'deafult heading';
  showTooltip = window.innerWidth >= 1096;

  @HostListener('window:resize')
  onResize() {
    this.showTooltip = window.innerWidth >= 1096;
  }
}
