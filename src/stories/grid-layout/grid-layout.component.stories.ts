import type { Meta, StoryObj } from '@storybook/angular';
import { GridLayoutComponent } from './grid-layout.component';

const meta: Meta<GridLayoutComponent> = {
  title: 'Table',
  component: GridLayoutComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<GridLayoutComponent>;

export const Table: Story = {
  args: {
    inputClass: 'table',
    heading: 'Table',
  },

  parameters: {
    docs: {
      source: {
        code: `
    <table class="table-container">
      <thead>
        <tr>
          <th class="head">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            Sub Process
          </th>
          <th>Activity</th>
          <th>Risk</th>
          <th>Severity</th>
          <th>Control</th>
          <th>Automatable</th>
          <th>Checkpoint</th>
          <th>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6V12M6 9H12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>
        
        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--purple vs">IT</button>
            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
           <button class="d-btn-small d-btn-small--success">Low</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--danger vs">AI</button>
            Antivirus Installation
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--danger">High</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>


        <tr>
          <td class="first-row">
            <label class="custom-checkbox custom-checkbox--vs">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <button class="d-btn--circle light-bg--success vs">IA</button>

            Internal Audit
          </td>
          <td>Antivirus Installed on...</td>
          <td>There are many variations...</td>
          <td>
            <button class="d-btn-small d-btn-small--warning">Medium</button>
          </td>
          <td>It is a long estab...</td>
          <td>No</td>
          <td>Contrary to popular be...</td>
          <td>
              <span class="icon-dots-horizontal-5 icon--xxl"></span>
          </td>
        </tr>
      </tbody>
    </table>   `.trim(),
        language: 'html',
      },
    },
  },
};
