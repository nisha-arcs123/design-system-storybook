import type { Meta, StoryObj } from '@storybook/angular';
import { ChipsComponent } from './chips.component';


const meta: Meta<ChipsComponent> = {
  title: 'Chips',
  component: ChipsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ChipsComponent>;

export const SmallSize: Story = {
  args: {
    inputClass: 'small-size',
    heading: 'Chips',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="chips chips--sm">
            <p>Application</p>

            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--sm">
            <p>Predefined</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--sm">
            <p>Variations</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--sm">
            <p>Database</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--sm">
            <p>Passages</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>




       <div class="chips chips--vs">
            <p>Application</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--vs">
            <p>Predefined</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--vs">
            <p>Variations</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--vs">
            <p>Database</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>

          <div class="chips chips--vs">
            <p>Passages</p>
            <div class="cross-sign">
              <span class="icon-Icon-Stroke1"></span>
            </div>
          </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};
