import type { Meta, StoryObj } from '@storybook/angular';
import { RadioBoxesComponent } from './radio-boxes.component';

const meta: Meta<RadioBoxesComponent> = {
  title: 'Inputs/Radio Boxes',
  component: RadioBoxesComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<RadioBoxesComponent>;

export const SimpleRadio: Story = {
  args: {
    label: 'Type Somthing....',
    inputClass: 'simple-radio',
    heading: 'Simple Radio',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="button-container">
          <label class="custome-radio custome-radio--vs">
            <input type="radio" />
            <span class="radiomark"></span>
          </label>
          <label class="custome-radio custome-radio--sm">
            <input type="radio" />
            <span class="radiomark"></span>
          </label>
          <label class="custome-radio custome-radio--md">
            <input type="radio" />
            <span class="radiomark"></span>
          </label>
          <label class="custome-radio custome-radio--lg">
            <input type="radio" />
            <span class="radiomark"></span>
          </label>
          <label class="custome-radio custome-radio--xl">
            <input type="radio" />
            <span class="radiomark"></span>
          </label>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const RoundedBorderRadio: Story = {
  args: {
    label: 'Username',
    inputClass: 'rounded-radio',
    heading: 'Rounded Border Radio',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="button-container">
          <label class="custome-radio custome-radio--vs custome-radio--outer-circle-border" >
            <input type="radio" />
            <span class="radiomark radiomark--circle"></span>
            Radio
          </label>
          <label class="custome-radio custome-radio--sm custome-radio--outer-circle-border">
            <input type="radio" />
            <span class="radiomark radiomark--circle"></span>
            Radio
          </label>
          <label class="custome-radio custome-radio--md custome-radio--outer-circle-border" >
            <input type="radio" />
            <span class="radiomark radiomark--circle"></span>
            Radio
          </label>
          <label class="custome-radio custome-radio--lg custome-radio--outer-circle-border" >
            <input type="radio" />
            <span class="radiomark radiomark--circle"></span>
            Radio
          </label>
          <label class="custome-radio custome-radio--xl custome-radio--outer-circle-border" >
            <input type="radio" />
            <span class="radiomark radiomark--circle"></span>
            Radio
          </label>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};


export const BuildingRadio: Story = {
  args: {
    label: 'Username',
    inputClass: 'building-radio',
    heading: 'Building Radio',
  },
  parameters: {
    docs: {
      source: {
        code: `
         <div class="button-container">
            <div class="building-container-checkbox">
            <span class="icon-Frame"></span>
            Company
            <label class="custome-radio custome-radio--vs">
                <input type="radio" />
                <span class="radiomark radiomark--circle"></span>
            </label>
            </div>
            <div class="building-container-checkbox">
            <span class="icon-Frame-1"></span>
            Company
            <label class="custome-radio custome-radio--vs">
                <input type="radio" />
                <span class="radiomark radiomark--circle"></span>
            </label>
            </div>
            <div class="building-container-checkbox">
            <span class="icon-Frame-2"></span>
            Company
            <label class="custome-radio custome-radio--vs">
                <input type="radio" />
                <span class="radiomark radiomark--circle"></span>
            </label>
            </div>
        </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};
