import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  title: 'Inputs',
  component: InputsComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;

export const Checkbox: Story = {
  args: {
    label: 'Type Somthing....',
    inputClass: 'checkbox',
    heading:'CheckBox',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="button-container">
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

      <div class="button-container">
        <label
          class="custom-checkbox custom-checkbox--vs custom-checkbox--outer-circle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--sm custom-checkbox--outer-circle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--md custom-checkbox--outer-circle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--lg custom-checkbox--outer-circle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--xl custom-checkbox--outer-circle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
      </div>

      <div class="button-container">
        <label
          class="custom-checkbox custom-checkbox--vs custom-checkbox--outer-rectangle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--sm custom-checkbox--outer-rectangle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--md custom-checkbox--outer-rectangle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--lg custom-checkbox--outer-rectangle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
        <label
          class="custom-checkbox custom-checkbox--xl custom-checkbox--outer-rectangle-border"
        >
          <input type="checkbox" />
          <span class="checkmark checkmark--circle"></span>
          Add
        </label>
      </div>

      <div class="button-container">
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


export const Radio: Story = {
  args: {
    label: 'Username',
    inputClass: 'radio',
    heading:'Radio',
  },
  parameters: {
    docs: {
      source: {
        code: `

        `.trim(),
        language: 'html',
      },
    },
  },
};



export const DateAndTime: Story = {
    args: {
      label: 'Username',
      inputClass: 'date&time',
      heading:'Date And Time'
    },
    parameters: {
      docs: {
        source: {
          code: `
  
          `.trim(),
          language: 'html',
        },
      },
    },
  };


  export const Switch: Story = {
    args: {
      label: 'Username',
      inputClass: 'switch',
      heading:'Switch',
    },
    parameters: {
      docs: {
        source: {
          code: `
  
          `.trim(),
          language: 'html',
        },
      },
    },
  };