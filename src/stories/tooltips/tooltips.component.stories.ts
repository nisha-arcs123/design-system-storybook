import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipsComponent } from './tooltips.component';

const meta: Meta<TooltipsComponent> = {
  title: 'Tooltips',
  component: TooltipsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TooltipsComponent>;

export const SmallContent: Story = {
  args: {
    inputClass: 'small-content',
    heading: 'Tooltip',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn no-arrow"
          placement="top"
          ngbTooltip="No Direction"
        >
          No direction
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="top"
          ngbTooltip="Tooltip on top"
        >
          Arrow top
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="end"
          ngbTooltip="Tooltip on right"
        >
          Arrow right
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="bottom"
          ngbTooltip="Tooltip on bottom"
        >
          Arrow bottom
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="start"
          ngbTooltip="Tooltip on left"
        >
          Arrow left
        </button>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const MaxContent: Story = {
  args: {
    inputClass: 'max-content',
    heading: 'Tooltip',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn no-arrow"
          placement="top"
          ngbTooltip="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
        >
          No direction
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="top"
          ngbTooltip="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
        >
          Arrow top
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="end"
          ngbTooltip="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
        >
          Arrow right
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="bottom"
          ngbTooltip="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
        >
          Arrow bottom
        </button>
        <button
          type="button"
          class="d-btn d-btn--tertiary tooltip-btn"
          placement="start"
          ngbTooltip="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
        >
          Arrow left
        </button>
        `.trim(),
        language: 'html',
      },
    },
  },
};
