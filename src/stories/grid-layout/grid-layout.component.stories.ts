import type { Meta, StoryObj } from '@storybook/angular';
import { GridLayoutComponent } from './grid-layout.component';

const meta: Meta<GridLayoutComponent> = {
  title: 'Grid Layout',
  component: GridLayoutComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<GridLayoutComponent>;



export const Table: Story ={
    args:{
        inputClass :'table',
        heading : 'Table',
    },
   
}