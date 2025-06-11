import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './simple-input.component';
const meta: Meta<InputComponent> = {
  title: 'Forms/Input/Simple Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const VerySmall: Story = {
  args: {
    label: 'Password',
    inputClass: 'very-small',
    heading: 'Very Small',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper vs">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const small: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'small',
    heading: 'Small',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper sm">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'medium',
    heading: 'Medium',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper md">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};

export const Large: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'large',
    heading: 'Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper lg">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};

export const ExtraLarge: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'extra-large',
    heading: 'Extra Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper xl">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
          `.trim(),
        language: 'html',
      },
    },
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'double-extra-large',
    heading: 'Double Extra Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
         <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper double-xl">
        <input type="text" class="medium" [placeholder]="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};
