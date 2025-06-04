import type { Meta, StoryObj } from '@storybook/angular';
import { GridLayoutComponent } from './table.component';

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



export const TableTwo: Story = {
  args: {
    inputClass: 'table-two',
    heading: 'Table',
  },

  parameters: {
    docs: {
      source: {
        code: `
    <table class="table-container ssp-table">
      <thead>
        <tr>
          <th class="head">Name</th>
          <th>Aliases</th>
          <th>Life Cycle</th>
          <th>Description</th>
          <th>Product Owner(s)</th>
          <th>Product Manager(s)</th>
          <th>System Owner(s)</th>
          <th>
            <span class="icon-Icon-Stroke-3 icon--more-sm"></span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--purple vs">S</button>
            SSPTEST10
          </td>
          <td>ssp</td>
          <td>Decommissioned</td>
          <td>desc</td>
          <td>Aaliyah Mumin</td>
          <td>N / A</td>
          <td class="first-row p-0">Hiep Luong</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--red vs">A</button>
            Audit Utopla
          </td>
          <td>na</td>
          <td>real-time-inspection manag...</td>
          <td>N / A</td>
          <td>N / A</td>
          <td>N / A</td>
          <td class="first-row p-0">Joan Pritchett</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--green vs">W</button>
            WDH Test 1
          </td>
          <td>wdh</td>
          <td>Decommissioned</td>
          <td>Description</td>
          <td class="first-row p-0">
            Aaliyah Mumin<button class="d-btn--circle light-bg--purple vs">
              +1
            </button>
          </td>
          <td>N / A</td>
          <td>Ravi Kumar</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>
        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--orange vs">T</button>
            Test application
          </td>
          <td>Test application</td>
          <td>Decommissioned</td>
          <td>Description</td>
          <td>N / A</td>
          <td>N / A</td>
          <td class="first-row p-0">Aaliyah Bansal</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--brown vs">N</button>
            New App
          </td>
          <td>N /A</td>
          <td>Decommissioned</td>
          <td>New app description</td>
          <td>Arron Van Etten</td>
          <td>N / A</td>
          <td class="first-row p-0">
            Aarohi Bhatt
            <button class="d-btn--circle light-bg--purple vs">+2</button>
          </td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--green vs">I</button>
            IAPP Test
          </td>
          <td>iapp</td>
          <td>Decommissioned</td>
          <td>api server</td>
          <td>Aaliyah Mumin</td>
          <td>Aaron Van Etten</td>
          <td class="first-row p-0">Shawn Bauer</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--purple vs">W</button>
            WDH Test 1
          </td>
          <td>wdh</td>
          <td>Decommissioned</td>
          <td>Description</td>
          <td class="first-row p-0">
            Aaliyah Mumin<button class="d-btn--circle light-bg--purple vs">
              +1
            </button>
          </td>
          <td>N / A</td>
          <td>Ravi Kumar</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>
        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--red vs">T</button>
            Test application
          </td>
          <td>Test application</td>
          <td>Decommissioned</td>
          <td>Description</td>
          <td>N / A</td>
          <td>N / A</td>
          <td class="first-row p-0">Aaliyah Bansal</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--brown vs">N</button>
            New App
          </td>
          <td>N /A</td>
          <td>Decommissioned</td>
          <td>New app description</td>
          <td>Arron Van Etten</td>
          <td>N / A</td>
          <td class="first-row p-0">
            Aarohi Bhatt
            <button class="d-btn--circle light-bg--purple vs">+2</button>
          </td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--orange vs">N</button>
            New App
          </td>
          <td>N /A</td>
          <td>Decommissioned</td>
          <td>New app description</td>
          <td>Arron Van Etten</td>
          <td>N / A</td>
          <td class="first-row p-0">
            Aarohi Bhatt
            <button class="d-btn--circle light-bg--purple vs">+2</button>
          </td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>

        <tr>
          <td class="first-row">
            <button class="d-btn--circle dark-bg--green vs">I</button>
            IAPP Test
          </td>
          <td>iapp</td>
          <td>Decommissioned</td>
          <td>api server</td>
          <td>Aaliyah Mumin</td>
          <td>Aaron Van Etten</td>
          <td class="first-row p-0">Shawn Bauer</td>
          <td>
            <button class="d-btn d-btn--circle white-bg-circle sm">
              <span class="icon-threedots icon--more-sm"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>`.trim(),
        language: 'html',
      },
    },
  },
};
