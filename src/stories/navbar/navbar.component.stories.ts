import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'Navbar',
  component: NavbarComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Navbar: Story = {
  args: {
    inputClass: 'left-side-navbar',
    heading: 'Left Side Navbar',
  }
};
