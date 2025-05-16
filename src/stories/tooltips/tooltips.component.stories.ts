import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipsComponent } from './tooltips.component';

const meta: Meta<TooltipsComponent> = {
  title: 'Tooltips',
  component: TooltipsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TooltipsComponent>;

export const SmallWidth: Story = {
  args: {
    inputClass: 'small-width',
    heading: 'Tooltip',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="tooltip-container">
            <div class="tooltip-content">No direction</div>
            <div class="tooltip">My Tooltip</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow down</div>
            <div class="tooltip tooltip--arrow-bottom">My Tooltip</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow up</div>
            <div class="tooltip tooltip--arrow-top">My Tooltip</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow right</div>
            <div class="tooltip tooltip--arrow-right">My Tooltip</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow left</div>
            <div class="tooltip tooltip--arrow-left">My Tooltip</div>
          </div>







          <div class="tooltip-container">
            <div class="tooltip-content">No direction</div>
            <div class="tooltip">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow down</div>
            <div class="tooltip tooltip--arrow-bottom">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow up</div>
            <div class="tooltip tooltip--arrow-top">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow right</div>
            <div class="tooltip tooltip--arrow-right">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
          </div>

          <div class="tooltip-container">
            <div class="tooltip-content">Arrow left</div>
            <div class="tooltip tooltip--arrow-left">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</div>
          </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};
