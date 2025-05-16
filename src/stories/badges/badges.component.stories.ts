import type { Meta, StoryObj } from '@storybook/angular';
import { BadgesComponent } from './badges.component';
const meta: Meta<BadgesComponent> = {
  title: 'Badges',
  component: BadgesComponent,
  tags: ['autodocs'],
 
  argTypes: {
    inputClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BadgesComponent>;


export const SimpleBadges: Story ={
    args:{
        inputClass:'badges',
        heading:'Badges',
    },
    parameters:{
        docs:{
            source:{
                code:`
                 <div class="containers">
                    <span class="badge sm">6</span>
                    <span class="badge md">7</span>
                    <span class="badge badge--success md">8</span>
                </div>
                `.trim(),
                language:`html`,
            },
        },
    },
};