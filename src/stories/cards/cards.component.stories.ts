import type { Meta, StoryObj } from '@storybook/angular';
import { CardsComponent } from './cards.component';


const meta: Meta<CardsComponent> = {
  title: 'Cards',
  component: CardsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardsComponent>;

export const Primary: Story = {
  args: {
    inputClass: 'primary',
    heading: 'Cards',
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
