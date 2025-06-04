import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarsComponent } from './sidebars.component';


const meta: Meta<SidebarsComponent> = {
  title: 'Sidebars',
  component: SidebarsComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SidebarsComponent>;


export const BlankSideBar: Story = {
  args: {
    inputClass: 'first-sidebar',
    heading: 'First Sidebar',
  },
  parameters: {
    docs: {
      source: {
        code: `     
        
        <ng-template #content let-offcanvas>
          <div class="offcanvas-header">
            <h4 class="offcanvas-title">Heading</h4>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              (click)="offcanvas.dismiss('Cross click')"
            ></button>
          </div>

          <div class="offcanvas-body h-100vh"></div>

          <div class="offcanvas-footer">
            <button
              type="button"
              class="d-btn d-btn--tertiary"
              (click)="offcanvas.close('Close click')"
            >
              Cancel
            </button>

            <button type="button" class="d-btn d-btn--primary">Save</button>
          </div>
        </ng-template>








        <!-- button to click -->
        <button class="d-btn d-btn--secondary" (click)="open(content)">
          Blank Right Sidebar
        </button>
     
      `.trim(),
        language: `html`,
      },
    },
  },
};



export const FilledSidebar: Story = {
  args: {
    inputClass: 'second-sidebar',
    heading: 'Second Sidebar',
  },
  parameters: {
    docs: {
      source: {
        code: `       
     <ng-template #content let-offcanvas>
          <div class="offcanvas-header">
            <h4 class="offcanvas-title">Columns</h4>

            <div class="selected-btn">
              <button class="d-btn d-btn--primary vs">Selected All</button>
              <button
                type="button"
                class="btn-close d-btn d-btn--tertiary"
                aria-label="Close"
                (click)="offcanvas.dismiss('Cross click')"
              ></button>
            </div>
          </div>

          <div class="offcanvas-body h-100vh">
            <div class="search-bar">
              <span class="icon-Vector-12"></span>
              <input type="text" placeholder="Search Columns..." />
            </div>

            <div class="side-item-container">
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>App ID</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Name</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Aliases</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Life Cycle</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Product Manager(s)</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>System Owner(s)</p>
              </div>

              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>IT Contact(s)</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Business Owner(s)</p>
              </div>

              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>First Approver</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Second Approver</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Vendor</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Funding Department</p>
              </div>

              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>Version</p>
              </div>
              <div class="side-item-list">
                <label class="custom-checkbox checkbox-vs">
                  <input type="checkbox" name="check1" />
                  <div class="checkbox-box">
                    <div class="checkmark"></div>
                  </div>
                </label>
                <p>GXP</p>
              </div>
            </div>

            <div class="offcanvas-footer d-none">
              <button
                type="button"
                class="d-btn d-btn--tertiary"
                (click)="offcanvas.close('Close click')"
              >
                Cancel
              </button>

              <button type="button" class="d-btn d-btn--primary">Save</button>
            </div>
          </div>
        </ng-template>

        <!-- button to click -->
        <button class="d-btn d-btn--secondary" (click)="open(content)">
          Check Box Right Side Bar
        </button>
      `.trim(),
        language: `html`,
      },
    },
  },
};