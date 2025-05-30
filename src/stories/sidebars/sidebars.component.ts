import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebars',
  imports: [CommonModule],
  templateUrl: './sidebars.component.html',
  styleUrl: './sidebars.component.scss',
  providers: [NgbOffcanvasConfig, NgbOffcanvas],
})
export class SidebarsComponent {
  @Input() label: string = 'Default Input';
  @Input() heading: string = 'Default heading';
  @Input() inputClass: 'first-sidebar' | 'second-sidebar' = 'first-sidebar';


  constructor(
		config: NgbOffcanvasConfig,
		private offcanvasService: NgbOffcanvas,
	) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}
}
