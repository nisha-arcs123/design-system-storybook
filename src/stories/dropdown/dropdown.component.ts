import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dropdown',
  imports: [CommonModule,NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() inputClass: 'normal-drop-down'| 'drop-down-with-chips' = 'normal-drop-down';
  @Input() heading = 'Default heading';


  selectedItem: string = '';

  selectItem(item: string) {
    this.selectedItem = item;
  }

}
