import type { Meta, StoryObj } from '@storybook/angular';
import { LeftSideBarComponent } from './leftsidebar.component';

const meta: Meta<LeftSideBarComponent> = {
  title: 'Left Side Bar',
  component: LeftSideBarComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<LeftSideBarComponent>;

export const LeftSideBarSmall: Story = {
  args: {
    inputClass: 'left-side-bar-small',
    heading: 'Left Side Bar Small',
  }
  ,
  parameters: {
    docs: {
      source: {
        code: `
      <div class="leftsidebar-container small-sidebar">
        <div class="upper-icons">
          <div class="icon-div">
            <button
              type="button"
              class="d-btn tooltip-btn"
              placement="end"
              ngbTooltip="Tooltip on end"
            >
              <span class="icon-watch"></span>
            </button>
          </div>
          <div class="icon-div">
            <button
              type="button"
              class="d-btn tooltip-btn"
              placement="end"
              ngbTooltip="Tooltip on end"
            >
              <span class="icon-start-vector"></span>
            </button>
          </div>
          <div class="icon-div">
            <button
              type="button"
              class="d-btn tooltip-btn"
              placement="end"
              ngbTooltip="Tooltip on end"
            >
              <span class="icon-userpng"></span>
            </button>
          </div>
          <div class="icon-div active">
            <button
              type="button"
              class="d-btn tooltip-btn"
              placement="end"
              ngbTooltip="Tooltip on end"
            >
              <span class="icon-Vector-Stroke-9"></span>
            </button>
          </div>
        </div>

        <div class="down-icons">
          <!-- <div class="icon-div">
          <span class="icon-Vector-Stroke-12"></span>
        </div> -->
        </div>
      </div>
    `.trim(),
        language: 'html',
      },
    },
  },
};



export const LeftSideBarLarge: Story = {
  args: {
    inputClass: 'left-side-bar-large',
    heading: 'Left Side Bar Large',
  }
  ,
  parameters: {
    docs: {
      source: {
        code: `
        <div class="leftsidebar-container large-sidebar">
          <div class="upper-icons">
            <div class="icon-div">
                <span class="icon-Vector-Stroke-21 icon--vs"></span>
                <p>Sales</p>
            </div>
            <div class="icon-div">
                <span class="icon-Vector-Stroke-21 icon--vs"></span>
                <p>Customers</p>
            </div>
            <div class="icon-div active">
                <span class="icon-Vector-Stroke-21 icon--vs"></span>
                <p>Expenses</p>
            </div>
          </div>
        </div>`.trim(),
        language: 'html',
      },
    },
  },
};