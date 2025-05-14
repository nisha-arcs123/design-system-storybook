import type { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AccordianComponent } from './accordian.component';
const meta: Meta<AccordianComponent> = {
  title: 'Accordian/WhiteBase',
  component: AccordianComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   declarations: [AccordianComponent],
    //   imports: [NgbAccordionModule],
    // }),
  ],
};

export default meta;
type Story = StoryObj<AccordianComponent>;

export const Medium: Story = {
  args: {
    inputClass: 'medium',
    heading: 'Medium',
  },
};

export const Large: Story = {
  args: {
    inputClass: 'large',
    heading: 'Large',
  },
};
