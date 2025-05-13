import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderFooterComponent } from './header-footer.component';


const meta: Meta<HeaderFooterComponent> = {
  title: 'Header-Footer',
  component: HeaderFooterComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<HeaderFooterComponent>;


export const Header: Story ={
    args:{
        inputClass :'header',
        heading : 'Heading',
    }
}


export const SubHeader: Story ={
    args:{
        inputClass :'subheader',
        heading : 'Sub Header',
    }
}

export const Footer: Story ={
    args:{
        inputClass :'footer',
        heading : 'Footer',
    }
   
}