import type { Meta, StoryObj } from '@storybook/angular';
import { LableSelectComponent } from './lable-select.component';
const meta: Meta<LableSelectComponent> = {
  title: 'Forms/Select/Lable Select',
  component: LableSelectComponent,
  tags: ['autodocs'],
  argTypes: {
    selectClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<LableSelectComponent>;

export const VerySmallLabel: Story = {
  args: {
    label: 'Password',
    heading:'Very Small Label',
    selectClass: 'very-small-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label">{{ label }}</label>
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

export const SmallLabel: Story = {
  args: {
    label: 'Enter Username',
    heading:'Small Label',
    selectClass: 'small-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label">{{ label }}</label>
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

export const MediumLabel: Story = {
  args: {
    label: 'Enter Username',
    heading:'Medium Label',
    selectClass: 'medium-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label">{{ label }}</label>
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

export const LargeLabel: Story = {
  args: {
    label: 'Enter Username',
    heading:'Large Label',
    selectClass: 'large-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label">{{ label }}</label>
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

export const ExtraLargeLabel: Story = {
  args: {
    label: 'Enter Username',
    heading:'Extra Large Label',
    selectClass: 'extra-large-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="form-group">
      <label for="label">{{ label }}</label>
      <div class="input-wrapper xl">
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

export const DoubleExtraLargeLabel: Story = {
    args: {
      label: 'Enter Username',
      selectClass: 'double-extra-large-label',
      heading:'Double Extra Large Label',
    },
    parameters: {
      docs: {
        source: {
          code: `
        <div class="form-group">
      <label for="label">{{ label }}</label>
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

