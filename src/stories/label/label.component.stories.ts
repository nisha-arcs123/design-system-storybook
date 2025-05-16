import type { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';
const meta: Meta<LabelComponent> = {
  title: 'Labels/ simpe label',
  component: LabelComponent,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Label: Story = {
  args: {
    inputClass:'label',
    heading:'Label',
  },
};