import type { Meta, StoryObj,moduleMetadata } from '@storybook/angular';
import { FoundationComponent } from './foundation.component';

const meta: Meta<FoundationComponent> = {
  title: 'Foundations',
  component: FoundationComponent,
  tags: ['autodocs'],
 
  argTypes: {
    foundClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<FoundationComponent>;

export const Colors: Story = {
  args: {
    foundClass: 'colors',
    heading: 'Semantic colors',
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

export const RoundCorners: Story = {
  args: {
    foundClass: 'rounded-corner',
    heading: 'Round Corners',
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

export const shadow: Story = {
  args: {
    foundClass: 'shadow',
    heading: 'Shadow',
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

export const Margin: Story = {
  args: {
    foundClass: 'margin',
    heading: 'Margin',
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

export const Padding: Story = {
  args: {
    foundClass: 'padding',
    heading: 'Padding',
  },

  parameters: {
    docs: {
      source: {
        code:`
        `.trim(),
        language:`html`,
      },
    },
  },
};


export const Typography: Story ={
    args:{
        foundClass:'typography',
        heading:'Typography',
    },
    parameters:{
        docs:{
            source:{
                code:`
                `.trim(),
                language:`html`,
            },
        },
    },
};