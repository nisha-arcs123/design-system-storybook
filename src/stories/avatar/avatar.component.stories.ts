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
        <button class="d-btn--circle light-bg--primary xxxl">CS</button>
      </div>

      <div class="containers">
        <button class="d-btn--circle light-bg--danger vs">AI</button>
        <button class="d-btn--circle light-bg--success vs">IA</button>
        <button class="d-btn--circle light-bg--purple vs">IT</button>
      </div>
      `.trim(),
        language: `html`,
      },
    },
  },
};
