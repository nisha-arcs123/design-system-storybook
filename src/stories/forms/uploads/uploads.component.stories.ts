import type { Meta, StoryObj } from '@storybook/angular';
import { UploadsComponent } from './uploads.component';

const meta: Meta<UploadsComponent> = {
  title: 'Forms',
  tags: ['autodocs'],
  component: UploadsComponent,
};

export default meta;
type Story = StoryObj<UploadsComponent>;

export const Uploads: Story = {
  args: {
    inputClass: 'uploads',
    heading: 'Upload',
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
