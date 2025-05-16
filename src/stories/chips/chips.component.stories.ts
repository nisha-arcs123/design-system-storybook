import type { Meta, StoryObj } from '@storybook/angular';
import { ChipsComponent } from './chips.component';


const meta: Meta<ChipsComponent> = {
  title: 'Chips',
  component: ChipsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ChipsComponent>;

export const SmallSize: Story = {
  args: {
    inputClass: 'small-size',
    heading: 'Chips',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="chips chips--sm">
            <p>Application</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--sm">
            <p>Predefined</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--sm">
            <p>Variations</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--sm">
            <p>Database</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--sm">
            <p>Passages</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>




        <div class="chips chips--vs">
            <p>Application</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--vs">
            <p>Predefined</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--vs">
            <p>Variations</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--vs">
            <p>Database</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="chips chips--vs">
            <p>Passages</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L10.5 10.5M1.5 10.5L10.5 1.5"
                stroke="#363636"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>




        `.trim(),
        language: 'html',
      },
    },
  },
};
