import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-icon-button',
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})


export class IconButtonComponent {
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
  iconBtnClass: 'circle-close-button' | 'circle-more-button' | 'circle-back-button' | 'circle-search-button' | 'edit-button-circle-tertiary' | 'delete-button-circle-tertiary' | 'icon-right' | 'icon-left' | 'add-btn' = 'circle-close-button';
  
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
      `storybook-button--${this.iconBtnClass}`,
    ];
  }
}
