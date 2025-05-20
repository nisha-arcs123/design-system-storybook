import type { Meta, StoryObj } from '@storybook/angular';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialoguesComponent } from './dialogues.component';

const meta: Meta<DialoguesComponent> = {
  title: 'Modal/Dialogues',
  component: DialoguesComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DialoguesComponent>;

export const SmallSize: Story = {
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



