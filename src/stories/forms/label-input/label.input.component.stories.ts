import type { Meta, StoryObj } from '@storybook/angular';
import { LabelInputComponent } from './label-input.component';
const meta: Meta<LabelInputComponent> = {
  title: 'Forms/Input/Lable Input',
  component: LabelInputComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<LabelInputComponent>;

export const VerySmallLabel: Story = {
  args: {
    label: 'Password',
    heading: 'Very Small Label',
    inputClass: 'very-small-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
   <div class="form-group">
      <label for="label"> label </label>
      <div class="input-wrapper vs">
        <input type="text" class="medium" placeholder="label" />
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
    heading: 'Small Label',
    inputClass: 'small-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label"> label </label>
      <div class="input-wrapper sm">
        <input type="text" class="medium" placeholder="label" />
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
    heading: 'Medium Label',
    inputClass: 'medium-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="form-group">
      <label for="label"> label </label>
      <div class="input-wrapper md">
        <input type="text" class="medium" placeholder="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div> `.trim(),
        language: 'html',
      },
    },
  },
};

export const LargeLabel: Story = {
  args: {
    label: 'Enter Username',
    heading: 'Large Label',
    inputClass: 'large-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label"> label </label>
      <div class="input-wrapper lg">
        <input type="text" class="medium" placeholder="label" />
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
    heading: 'Extra Large Label',
    inputClass: 'extra-large-label',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="form-group">
      <label for="label"> label </label>
      <div class="input-wrapper xl">
        <input type="text" class="medium" placeholder="label" />
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
    inputClass: 'double-extra-large-label',
    heading: 'Double Extra Large Label',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="form-group">
      <label for="label">label </label>
      <div class="input-wrapper xxl">
        <input type="text" class="medium" placeholder="label" />
      </div>
      <div class="error-message d-none">This is error alert</div>
    </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};
