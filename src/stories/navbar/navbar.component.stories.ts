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
  ,
  parameters: {
    docs: {
      source: {
        code: `
   <div class="navbar-container">
      <div class="upper-icons">
        <div class="icon-div">
          <span class="icon-home"></span>
        </div>
        <div class="icon-div">
          <span class="icon-Vector-Stroke-9"></span>
        </div>

        <div class="icon-div">
          <span class="icon-Vector-13"></span>
        </div>
        <div class="icon-div">
          <span class="icon-circle"></span>
        </div>
      
        <div class="icon-div">
          <span class="icon-Vector-Stroke-4"></span>
        </div>
        <div class="icon-div">
          <span class="icon-Vector-Stroke-10"></span>
        </div>
        <div class="icon-div">
          <span class="icon-Vector-Stroke-5"></span>
        </div>
        <div class="icon-div">
          <span class="icon-Vector-Stroke-11"></span>
        </div>
        <div class="icon-div">
          <span class="icon-Vector-Stroke-6"></span>
        </div>
      </div>

      <div class="down-icons">
        <div class="icon-div">
          <span class="icon-Vector-Stroke-12"></span>
        </div>
      </div>
    </div>`.trim(),
        language: 'html',
      },
    },
  },
};
