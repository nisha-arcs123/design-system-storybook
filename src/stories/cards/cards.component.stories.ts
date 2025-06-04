import type { Meta, StoryObj } from '@storybook/angular';
import { CardsComponent } from './cards.component';


const meta: Meta<CardsComponent> = {
  title: 'Cards',
  component: CardsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardsComponent>;

export const Primary: Story = {
  args: {
    inputClass: 'primary',
    heading: 'Cards',
  },
  parameters: {
    docs: {
      source: {
        code: `
          <div class="cards-container negative-color">
            <div class="card-img-div">
              <span class="icon-Close-Square"></span>
            </div>
            <div class="card-text-div">
              <p class="text1">Invaild</p>
              <p class="text2">55</p>
            </div>
          </div>


          <div class="cards-container warning-color">
            <div class="card-img-div">
              <span class="icon-timers"></span>
            </div>
            <div class="card-text-div">
              <p class="text1">Not Started</p>
              <p class="text2">1 Day</p>
            </div>
          </div>


          <div class="cards-container primary-color">
            <div class="card-img-div">
              <span class="icon-Time-Circle"></span>
            </div>
            <div class="card-text-div">
              <p class="text1">In-progress</p>
              <p class="text2">12 Day</p>
            </div>
          </div>


          <div class="cards-container positive-color">
            <div class="card-img-div">
              <span class="icon-Paper"></span>
            </div>
            <div class="card-text-div">
              <p class="text1">Completed</p>
              <p class="text2">5</p>
            </div>
          </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};
