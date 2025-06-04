import type { Meta ,StoryObj} from "@storybook/angular";
import { DropdownComponent } from "./dropdown.component";

const meta:Meta<DropdownComponent>={
    title:'DropDown',
    component:DropdownComponent,
    tags:['autodocs'],

}

export default meta;
type Story = StoryObj<DropdownComponent>;



export const NormalDropDown:Story = {
    args:{
        inputClass:'normal-drop-down',
        heading:'Normal Drop Down',
    },
    parameters: {
    docs: {
      source: {
        code: `
       <div
          ngbDropdown
          class="d-inline-block dropdown-container"
          #dropdown="ngbDropdown"
        >
          <label class="toplabel-input">Hosting Location</label>

          <button
            class="form-control"
            ngbDropdownToggle
            [attr.aria-expanded]="dropdown.isOpen()"
          >
            {{ selectedItem || "Select Item" }}
          </button>

          <div ngbDropdownMenu>
            <button ngbDropdownItem (click)="selectItem('Exelixis Controlled')">
              Exelixis Controlled
            </button>
            <button ngbDropdownItem (click)="selectItem('Vendor Controlled')">
              Vendor Controlled
            </button>
            <button ngbDropdownItem (click)="selectItem('Hybrid')">
              Hybrid
            </button>
          </div>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
}



export const DropDownWithChips:Story = {
    args:{
        inputClass:'drop-down-with-chips',
        heading:'Drop Down With Chips',
    },
    parameters: {
    docs: {
      source: {
        code: `
               <div ngbDropdown class="dropdown d-inline-block dropdown-container">
          <label for="" class="toplabel-input">Hosting Location</label>
          <button class="form-control" ngbDropdownToggle>
            <div class="chips chips--vs">
              <p>{{ selectedItem || "Select Item" }}</p>
              <div class="cross-sign">
                <span class="icon-Icon-Stroke1"></span>
              </div>
            </div>
          </button>

          <div ngbDropdownMenu>
            <button ngbDropdownItem (click)="selectItem('Exelixis Controlled')">
              Exelixis Controlled
            </button>
            <button ngbDropdownItem (click)="selectItem('Vendor Controlled')">
              Vendor Controlled
            </button>
            <button ngbDropdownItem (click)="selectItem('Hybrid')">
              Hybrid
            </button>
          </div>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
}




export const MultipleBadges:Story={
  args:{
    inputClass:'multiple-badges-chips',
    heading:'Multiple Bages',
  },


  parameters:{
    docs:{
      source:{
        code:`
         <div
          ngbDropdown
          class="d-inline-block multiple-dropdown-container"
          #dropdown="ngbDropdown"
        >
          <label class="toplabel-input">Hosting Location</label>

          <button
            class="form-control d-flex align-items-center justify-content-between"
            ngbDropdownToggle
            [attr.aria-expanded]="dropdown.isOpen()"
          >
            <span class="d-flex flex-wrap">
              <ng-container *ngIf="selectedItems.length; else placeholder">
                <span *ngFor="let item of selectedItems" class="badge me-1">
                  <p>{{ item }}</p>

                  <div class="cross-sign cursor-pointer" (click)="removeItem(item)">
                    <span class="icon-Icon-Stroke1"></span>
                  </div>
                </span>
              </ng-container>
              <ng-template #placeholder>Select Items</ng-template>
            </span>
            <span class="arrow-icon ms-auto"></span>
          </button>

          <div ngbDropdownMenu>
            <button
              ngbDropdownItem
              *ngFor="let item of items"
              (click)="toggleItem(item)"
              [class.active]="selectedItems.includes(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
        `.trim(),
        language:'html',
      }
    }
  }
}