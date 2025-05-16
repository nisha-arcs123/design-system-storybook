import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tooltips',
  imports: [CommonModule,NgbTooltipModule],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.scss',
})


export class TooltipsComponent {
  @Input() inputClass: 'small-content' | 'max-content' = 'small-content';
  @Input() heading = 'Default heading';
}
