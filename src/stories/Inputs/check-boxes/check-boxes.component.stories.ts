import type { Meta, StoryObj } from '@storybook/angular';
import { CheckBoxesComponent } from './check-boxes.component';

const meta: Meta<CheckBoxesComponent> = {
  title: 'Inputs/Check Boxes',
  component: CheckBoxesComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<CheckBoxesComponent>;

export const SimpleCheckbox: Story = {
  args: {
    label: 'Type Somthing....',
    inputClass: 'simple-checkbox',
    heading: 'Simple Checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `
   <div class="container">
        <label class="custom-checkbox custom-checkbox--vs">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="custom-checkbox custom-checkbox--sm">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="custom-checkbox custom-checkbox--md">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="custom-checkbox custom-checkbox--lg">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="custom-checkbox custom-checkbox--xl">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const RoundedBorderCheckbox: Story = {
  args: {
    label: 'Username',
    inputClass: 'rounded-checkbox',
    heading: 'Rounded Border Checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="container">
            <label class="custom-checkbox custom-checkbox--vs custom-checkbox--outer-circle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--sm custom-checkbox--outer-circle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--md custom-checkbox--outer-circle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--lg custom-checkbox--outer-circle-border"  >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--xl custom-checkbox--outer-circle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const SquareBorderCheckbox: Story = {
  args: {
    label: 'Username',
    inputClass: 'square-checkbox',
    heading: 'Square Border Checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="container">
            <label class="custom-checkbox custom-checkbox--vs custom-checkbox--outer-rectangle-border">
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--sm custom-checkbox--outer-rectangle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--md custom-checkbox--outer-rectangle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--lg custom-checkbox--outer-rectangle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
            <label class="custom-checkbox custom-checkbox--xl custom-checkbox--outer-rectangle-border" >
            <input type="checkbox" />
            <span class="checkmark checkmark--circle"></span>
            Add
            </label>
        </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};

export const BuildingCheckbox: Story = {
  args: {
    label: 'Username',
    inputClass: 'building-box',
    heading: 'Building Checkbox',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="container">

            <div class="building-container-checkbox">
                <span class="icon-Frame"></span>
                Company
                <label class="custom-checkbox custom-checkbox--vs">
                    <input type="checkbox" />
                    <span class="checkmark checkmark--circle"></span>
                </label>
            </div>

            <div class="building-container-checkbox">
                <span class="icon-Frame-1"></span>
                Company
                <label class="custom-checkbox custom-checkbox--vs">
                    <input type="checkbox" />
                    <span class="checkmark checkmark--circle"></span>
                </label>
            </div>

            <div class="building-container-checkbox">
                <span class="icon-Frame-2"></span>
                Company
                <label class="custom-checkbox custom-checkbox--vs">
                    <input type="checkbox" />
                    <span class="checkmark checkmark--circle"></span>
                </label>
            </div>
        </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};
