import type { Meta, StoryObj } from '@storybook/angular';
import { ModalTriggerComponent } from './modal-trigger.component';


const meta: Meta<ModalTriggerComponent> = {
  title: 'Modal/trigger',
  component: ModalTriggerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalTriggerComponent>;

export const OpenModal: Story = {
  args: {
    inputClass: 'dialogue',
    heading: 'Dialogues',
  },
  parameters: {
    docs: {
      source: {
        code: `

        `.trim(),
        language: 'html',
      },
    },
  },
};



