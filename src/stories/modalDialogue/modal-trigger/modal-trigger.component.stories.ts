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

        // trigger component where the button is visible
         <button class="d-btn d-btn--primary" (click)="open()">Open Modal</button>


        //  dialogue box component where the box will displayed


        <div class="dialogue-container">
          <div class="modal-header">
            <h5 class="modal-title">Add Life Cycle</h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              (click)="activeModal.dismiss('Cross click')"
            ></button>
          </div>

          <div class="modal-body">
            <p class="text-muted">
              Fields marked with <span class="text-danger">*</span> are required.
            </p>

            <div class="input-box mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" />
            </div>

            <div class="input-box">
              <textarea
                class="form-control"
                rows="7"
                placeholder="Description"
              ></textarea>
            </div>
          </div>

          <div class="modal-footer w-100">
            <button class="d-btn d-btn--primary w-100">Save</button>
          </div>
        </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};



