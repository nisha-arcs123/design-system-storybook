import { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';


const meta: Meta<TabsComponent> = {
  title: 'Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
 
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const PrimaryTab: Story = {
  args: {
    inputClass: 'primary-tabs',
    heading: 'Primary tab',
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



export const TertiaryTab: Story = {
  args: {
    inputClass: 'tertiary-tabs',
    heading: 'Tertiary tab',
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
