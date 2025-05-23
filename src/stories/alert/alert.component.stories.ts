import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;


export const Alert: Story = {
  args: {
    type: 'success',
    heading: 'Success Alert',
  },
  parameters: {
    docs: {
      source: {
        code: `       
     
      `.trim(),
        language: `html`,
      },
    },
  },
};
