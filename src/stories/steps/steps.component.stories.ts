import type { Meta, StoryObj } from '@storybook/angular';
import { StepsComponent } from './steps.component';
const meta: Meta<StepsComponent> = {
  title: 'Steps/ Simple Steps',
  component: StepsComponent,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<StepsComponent>;

export const steps: Story = {
  args: {
    inputClass:'steps',
    heading:'Step',
  },
  parameters:{
    docs:{
      source:{
        code:`
         <div class="containers mt-4">
        <div class="stepper">
          <ng-container *ngFor="let step of steps; let i = index">
            <div class="step text-center">
              <div
                class="circle"
                [class.active]="i === currentStep"
                [class.completed]="i < currentStep"
              >
                {{ i + 1 }}
              </div>
              <div class="label mt-2">{{ step }}</div>
            </div>
            <div
              *ngIf="i < steps.length - 1"
              class="line flex-grow-1 mx-2"
            ></div>
          </ng-container>
        </div>
      </div>
        `.trim(),
        language:'html',
      }
    }
  }
};