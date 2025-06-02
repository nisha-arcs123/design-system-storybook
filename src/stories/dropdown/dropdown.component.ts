import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() inputClass:
    | 'normal-drop-down'
    | 'drop-down-with-chips'
    | 'multiple-badges-chips' = 'normal-drop-down';
  @Input() heading = 'Default heading';

  isOpen = false;
  selectedItem: string = '';

  selectItem(item: string) {
    this.selectedItem = item;
  }


  //multiple select items
  items = ['Exelixis Controlled', 'Vendor Controlled', 'Hybrid'];
  selectedItems: string[] = [];

  toggleItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }

  removeItem(item: string) {
    this.selectedItems = this.selectedItems.filter((i) => i !== item);
  }
}
