import type { Preview } from '@storybook/angular'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Foundations',
          'Buttons',
          'Inputs',
          'Forms',
          'Accordian',
          'Sidebars',
          'Dialogs',
          'Pop-up',
          'Card',
          'DropDown',
          'Tooltips',
          'Table',
          'Pagination',
          'Chips',
          'Avatar',
          'Badges',
          'Lists',
          'Labels',
          'Alert',
          'Breadcrumb',
          'Tab',
        ],
      },
    },
  },
};

export default preview;