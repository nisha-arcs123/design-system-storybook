import type { Meta, StoryObj } from '@storybook/angular';
import { SimpleSelectComponent } from './simple-select.component';

const meta: Meta<SimpleSelectComponent> = {
  title: 'Forms/Select/Simple Select',
  component: SimpleSelectComponent,
  tags: ['autodocs'],
  argTypes: {
    selectClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<SimpleSelectComponent>;

export const VerySmall: Story = {
  args: {
    label: 'Password',
    selectClass: 'very-small',
    heading: 'Very Small',
  },
  parameters: {
    docs: {
      source: {
        code: `
 <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper vs">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
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
    selectClass: 'small',
    heading: 'Small',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper sm">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
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
    selectClass: 'medium',
    heading: 'Medium',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper md">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
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
    selectClass: 'large',
    heading: 'Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper lg">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
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
    selectClass: 'extra-large',
    heading: 'Extra Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper xl">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div> `.trim(),
        language: 'html',
      },
    },
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    label: 'Enter Username',
    selectClass: 'double-extra-large',
    heading: 'Double Extra Large',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="form-group">
      <label for="label" class="d-none">{{ label }}</label>
      <div class="input-wrapper xxl">
        <select class="custom-select">
          <option value="">Select Option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};
