
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-button',
  imports: [CommonModule,NgbDropdownModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input() heading: string = 'Default Heading';
  
  @Input()
  variant: 'button-kinds' | 'primary-button-size' | 'secondary-button-size' | 'tertiary-button-size' | 'link-button-size' | 'button-loader' | 'disabled' | 'error-and-success'= 'button-kinds';
  
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      `storybook-button--${this.variant}`,
    ];
  }
  
}
