import type { Meta, StoryObj } from '@storybook/angular';
import { FullLayoutComponent } from './full-layout.component';

const meta: Meta<FullLayoutComponent> = {
  title: 'Full Page View',
  component: FullLayoutComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<FullLayoutComponent>;
