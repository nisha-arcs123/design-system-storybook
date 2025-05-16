import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'Paginaiton',
  component: PaginationComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const SimplePagination: Story = {
  args: {
    inputClass: 'pagination1',
    heading: 'Simple Pagination',
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
};


export const ngBootstrapPagination: Story = {
  args: {
    inputClass: 'pagination2',
    heading: 'Ng Bootstrap Pagination',
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
};