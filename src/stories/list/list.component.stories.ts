import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

const meta: Meta<ListComponent> = {
  title: 'List',
  component: ListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ListComponent>;

export const SimpleList: Story = {
  args: {
    inputClass: 'simple-list',
    heading: 'Simple List',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <ul class="unordered-list">
          <li class="list-item"><p>New List</p></li>
          <li class="list-item"><p>Last Edit</p></li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};




export const IconList: Story = {
  args: {
    inputClass: 'icon-list',
    heading: 'Icon List',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <ul class="unordered-list">
          <li class="list-item">
            <span class="icon-bothdirarr"></span>
            <p>Single</p>
          </li>
          <li class="list-item">
            <span class="icon-bothdirarr"></span>
            <p>Double</p>
          </li>
          <li class="list-item">
            <span class="icon-bothdirarr"></span>
            <p>Triple</p>
          </li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};



export const Initials: Story = {
  args: {
    inputClass: 'initials',
    heading: 'Initials',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <ul class="unordered-list">
          <li class="list-item">
            <p>100660</p>
          </li>
          <li class="list-item">
            <p>CW003479</p>
          </li>
          <li class="list-item">
            <p>A21006875</p>
          </li>
          <li class="list-item">
            <p>Z21006875</p>
          </li>
          <li class="list-item">
            <p>EW003479</p>
          </li>
          <li class="list-item">
            <p>100670</p>
          </li>
        </ul>

        <ul class="unordered-list">
          <li class="list-item">
            <div class="message-notify-container">
              <p>Erin O'leary</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">2+</button>
            </div>
          </li>
          <li class="list-item">
            <div class="message-notify-container">
              <p>Will Ng</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">2+</button>
            </div>
          </li>
          <li class="list-item">
            <div class="message-notify-container">
              <p>Kevin Atkin</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">vs</button>
            </div>
          </li>
          <li class="list-item">
            <div class="message-notify-container">
              <p>Murali Kolli</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">2+</button>
            </div>
          </li>
          <li class="list-item">
            <div class="message-notify-container">
              <p>Kanwar Singh</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">2+</button>
            </div>
          </li>
          <li class="list-item">
            <div class="message-notify-container">
              <p>Sumit Debnath</p>
              <button class="d-btn d-btn--circle gray-bg-circle vs">2+</button>
            </div>
          </li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};




export const MultiSelect: Story = {
  args: {
    inputClass: 'multiselect',
    heading: 'Initials',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <ul class="unordered-list search-list">
          <div class="search-bar">
            <span class="icon-Vector-12"></span>
            <input type="text" placeholder="Search here..." />
          </div>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>Name</p>
          </li>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>Aliases</p>
          </li>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>Life Cycle</p>
          </li>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>Description</p>
          </li>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>Product Manager(s)</p>
          </li>
          <li class="list-item">
            <label class="custom-checkbox checkbox-vs">
              <input type="checkbox" name="check1" />
              <div class="checkbox-box">
                <div class="checkmark"></div>
              </div>
            </label>
            <p>System Owner(s)</p>
          </li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};



export const Download: Story = {
  args: {
    inputClass: 'download',
    heading: 'Initials',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <ul class="unordered-list">
          <li class="list-item">
            <span class="icon-Vector"></span>
            <p>Download</p>
          </li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};




export const SignOut: Story = {
  args: {
    inputClass: 'signout',
    heading: 'Signo Out',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <ul class="unordered-list profile_edit">
          <li class="list-item common-list">
            <button class="d-btn--circle dark-bg--purple md">OS</button>
            <div class="user-info">
              <p class="large">Opinder Singh</p>
              <p class="small">opinder.singhtele.us</p>
            </div>
          </li>
          
          <li class="list-item common-list">
            <button class="d-btn d-btn--tertiary vs">
              <span class="icon-paint icon--vs"></span>
            </button>

            <p class="large">Themes & Font Size</p>
          </li>
          <div class="line"></div>
          <li class="list-item common-list">
            <button class="d-btn d-btn--tertiary vs">
              <span class="icon-signout icon--vs"></span>
            </button>
            <p class="large">Log Out</p>
          </li>
        </ul>
        `.trim(),
        language: 'html',
      },
    },
  },
};