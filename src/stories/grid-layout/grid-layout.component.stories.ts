import type { Meta, StoryObj } from '@storybook/angular';
import { GridLayoutComponent } from './grid-layout.component';

const meta: Meta<GridLayoutComponent> = {
  title: 'Grid Layout',
  component: GridLayoutComponent,
  tags: ['autodocs'],
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<GridLayoutComponent>;



export const Table: Story ={
    args:{
        inputClass :'table',
        heading : 'Table',
    },
    parameters: {
    docs: {
      source: {
        code: `

          `.trim(),
        language: 'html',
      },
    },
  },
}

// export const Footer: Story ={
//     args:{
//         inputClass :'footer',
//         heading : 'Footer',
//     }
//     ,
//     parameters: {
//     docs: {
//       source: {
//         code: `
  
//           `.trim(),
//         language: 'html',
//       },
//     },
//   },
// }