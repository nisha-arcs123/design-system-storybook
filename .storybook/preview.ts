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
          'Inputs',
          [ 'Docs', 'Check Boxes', 'Radio Boxes', 'Switch', 'Date And Time',],
        ],
      },
    },
  },
};

export default preview;