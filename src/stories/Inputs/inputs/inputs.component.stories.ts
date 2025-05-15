import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  title: 'Inputs',
  component: InputsComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;




export const DateAndTime: Story = {
    args: {
      label: 'Username',
      inputClass: 'date&time',
      heading:'Date And Time'
    },
    parameters: {
      docs: {
        source: {
          code: `
  <div class="containers">
          <div class="calendar">
            <div class="calendar-header">
              <p class="calendar-year">{{ currentDate.getFullYear() }}</p>
              <h2>{{ currentDate.toLocaleString('default', { month: 'long' }) }} {{ currentDate.getFullYear() }}</h2>
            </div>
          
            <div class="calendar-controls">
              <button (click)="prevMonth()">←</button>
              <p class="curMonth">{{ currentDate.toLocaleString('default', { month: 'long' }) }} {{ currentDate.getFullYear() }}</p>
              <button (click)="nextMonth()">→</button>
            </div>
          
            <div class="calendar-grid">
              <div class="day-name" *ngFor="let day of ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']">{{ day }}</div>
              <button
                *ngFor="let day of monthDays"
                class="calendar-day"
                [class.selected]="selectedDate?.getDate() === day"
                (click)="selectDate(day)"
              >
                {{ day }}
              </button>
            </div>
          
            <div class="calendar-actions">
              <button>Cancel</button>
              <button>Ok</button>
            </div>
          </div>
          
        </div>
          `.trim(),
          language: 'html',
        },
      },
    },
  };


  export const Switch: Story = {
    args: {
      label: 'Username',
      inputClass: 'switch',
      heading:'Switch',
    },
    parameters: {
      docs: {
        source: {
          code: `
  <div class="containers">
          <div class="switchBox">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>


        <div class="containers">
          <div class="switchBox">
            Label
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
          `.trim(),
          language: 'html',
        },
      },
    },
  };