import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';
// import { NgAlertModule } from 'ng-alert';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

const meta: Meta<AlertComponent> = {
  title: 'Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NgbAlert],  
    }),
  ],
};

export default meta;
type Story = StoryObj<AlertComponent>;



export const Alert: Story = {
  args: {
    type: 'success',
    heading: 'Success Alert',
  },
  parameters: {
    docs: {
      source: {
        code: `       
     
      `.trim(),
        language: `html`,
      },
    },
  },
};
