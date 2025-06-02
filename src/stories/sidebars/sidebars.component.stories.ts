import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarsComponent } from './sidebars.component';


const meta: Meta<SidebarsComponent> = {
  title: 'Sidebars',
  component: SidebarsComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SidebarsComponent>;


export const BlankSideBar: Story = {
  args: {
    inputClass: 'first-sidebar',
    heading: 'First Sidebar',
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



export const FilledSidebar: Story = {
  args: {
    inputClass: 'second-sidebar',
    heading: 'Second Sidebar',
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