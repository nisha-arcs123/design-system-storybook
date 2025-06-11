import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],

  argTypes: {
    inputClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const SimpleAvatar: Story = {
  args: {
    inputClass: 'avatar',
    heading: 'Avatar',
  },
  parameters: {
    docs: {
      source: {
        code: `       
        <div class="containers">
        <button class="d-btn--circle light-bg--primary xl">CS</button>
        <button class="d-btn--circle light-bg--primary double-xl">CS</button>
        <button class="d-btn--circle light-bg--primary xxxl">CS</button>
      </div>

      <div class="containers">
        <button class="d-btn--circle brown-bg-circle sm">OS</button>
        <button class="d-btn--circle brown-bg-circle md">OS</button>
        <button class="d-btn--circle brown-bg-circle lg">OS</button>
        <button class="d-btn--circle brown-bg-circle xl">OS</button>
      </div>

      <div class="containers">
        <button class="d-btn--circle light-bg--danger vs">AI</button>
        <button class="d-btn--circle light-bg--success sm">IA</button>
        <button class="d-btn--circle light-bg--purple md">IT</button>
        <button class="d-btn--circle light-bg--danger lg">AI</button>
        <button class="d-btn--circle light-bg--success xl">IA</button>
        <button class="d-btn--circle light-bg--purple double-xl">IT</button>
      </div>
      `.trim(),
        language: `html`,
      },
    },
  },
};
