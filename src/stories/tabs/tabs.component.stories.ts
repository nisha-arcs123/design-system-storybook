import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'Tab',
  component: TabsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const SimpleList: Story = {
  args: {
    inputClass: 'primary-tabs',
    heading: 'Simple List',
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
