import type { Meta, StoryObj } from '@storybook/angular';
import { WithIconInputComponent } from './with-icon-input.component';
const meta: Meta<WithIconInputComponent> = {
  title: 'Forms/Input/With Icon Input',
  component: WithIconInputComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<WithIconInputComponent>;

export const LeftImageInput: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'left-img-input',
    heading: 'Left Image Input',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <div class="form-group">
            <label for="label">{{ label }}</label>
            <div class="input-wrapper lg left-icon">
              <span class="icon-Icon-Stroke-4 icon icon-1"></span>
              <input type="text" class="medium" [placeholder]="label" />

              <span class="icon-Vector-7 icon icon-2"></span>
            </div>
            <div class="error-message d-none">This is error alert</div>
          </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};

export const RightImageInput: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'right-img-input',
    heading: 'Right Image Input',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <div class="form-group">
            <label for="label">{{ label }}</label>
            <div class="input-wrapper lg right-icon">
              <span class="icon-Icon-Stroke-4 icon icon-1"></span>

              <input type="text" class="medium" [placeholder]="label" />

              <span class="icon-Vector-7 icon icon-2"></span>
            </div>
            <div class="error-message d-none">This is error alert</div>
          </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};

export const BothSideImageInput: Story = {
  args: {
    label: 'Enter Username',
    inputClass: 'both-img-input',
    heading: 'Both Side Image Input',
  },
  parameters: {
    docs: {
      source: {
        code: `
         <div class="form-group">
            <label for="label">{{ label }}</label>
            <div class="input-wrapper lg both-icon">
              <span class="icon-Icon-Stroke-4 icon icon-1"></span>
              <input type="text" class="medium" [placeholder]="label" />
              <span class="icon-Vector-7 icon icon-2"></span>
            </div>
            <div class="error-message d-none">This is error alert</div>
          </div>
            `.trim(),
        language: 'html',
      },
    },
  },
};
