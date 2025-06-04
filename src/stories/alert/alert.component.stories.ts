import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

const meta: Meta<AlertComponent> = {
  title: 'Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,AlertComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AlertComponent>;




export const SimpleAlert: Story = {
  args: {
    inputClass: 'alert',
    heading: 'Simple Alert',
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

