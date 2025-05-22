import type { Meta, StoryObj } from '@storybook/angular';
import { LayoutsComponent } from './layouts.component';

const meta: Meta<LayoutsComponent> = {
  title: 'Page Layouts/Default Page',
  component: LayoutsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LayoutsComponent>;

export const Page1: Story = {
  args: {
    inputClass: 'page1',
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


export const Page2: Story = {
  args: {
    inputClass: 'page2',
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


export const Page3: Story = {
  args: {
    inputClass: 'page3',
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



export const Page4: Story = {
  args: {
    inputClass: 'page4',
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
