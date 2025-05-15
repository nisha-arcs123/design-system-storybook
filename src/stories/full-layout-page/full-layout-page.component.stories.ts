import type { Meta, StoryObj } from '@storybook/angular';
import { FullLayoutComponent } from './full-layout-page.component';

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

export const pageOne: Story = {
  args: {
    inputClass : 'page-one',
    heading : 'First -page',
  },
};
