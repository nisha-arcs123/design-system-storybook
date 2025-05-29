import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

const meta: Meta<ListComponent> = {
  title: 'List/Component',
  component: ListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ListComponent>;

export const SimpleList: Story = {
  args: {
    inputClass: 'simple-list',
    heading: 'simple-list',
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
