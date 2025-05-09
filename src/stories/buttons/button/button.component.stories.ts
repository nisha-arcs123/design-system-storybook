import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Buttons/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonKinds: Story = {
  args: {
    label: 'Primary',
    variant: 'button-kinds',
    heading:'Button Kinds',
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="container">
        <button class="d-btn d-btn-primary md">Primary</button>
        <button class="d-btn d-btn-secondary md">Secondary</button>
        <button class="d-btn d-btn-tertiary md">Tertiary</button>
        <button class="d-btn d-btn-link md">Link</button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};

export const PrimaryButtonSize: Story = {
    args: {
      label: 'Primary',
      variant: 'primary-button-size',
      heading:'Primary Button Size'
    },
    parameters: {
        docs: {
          source: {
            code: `
      <div class="container">
        <button class="d-btn d-btn-primary vs">Primary</button>
        <button class="d-btn d-btn-primary sm">Primary</button>
        <button class="d-btn d-btn-primary md">Primary</button>
        <button class="d-btn d-btn-primary lg">Primary</button>
        <button class="d-btn d-btn-primary xl">Primary</button>
        <button class="d-btn d-btn-primary xxl">Primary</button>
      </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };


export const SecondaryButtonSize: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary-button-size',
    heading:'Secondary Button Size'
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="container">
        <button class="d-btn d-btn-secondary vs">Secondary</button>
        <button class="d-btn d-btn-secondary sm">Secondary</button>
        <button class="d-btn d-btn-secondary md">Secondary</button>
        <button class="d-btn d-btn-secondary lg">Secondary</button>
        <button class="d-btn d-btn-secondary xl">Secondary</button>
        <button class="d-btn d-btn-secondary xxl">Secondary</button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};

export const TertiaryButtonSize: Story = {
  args: {
    label: 'Tertiary',
    variant: 'tertiary-button-size',
    heading:'Tertiary Button Size'
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="container">
        <button class="d-btn d-btn-tertiary vs">Tertiary</button>
        <button class="d-btn d-btn-tertiary sm">Tertiary</button>
        <button class="d-btn d-btn-tertiary md">Tertiary</button>
        <button class="d-btn d-btn-tertiary lg">Tertiary</button>
        <button class="d-btn d-btn-tertiary xl">Tertiary</button>
        <button class="d-btn d-btn-tertiary xxl">Tertiary</button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};


export const LinkButtonSize: Story = {
    args: {
      label: 'Link',
      variant: 'link-button-size',
      heading:'Link Button Size'
    },
    parameters: {
        docs: {
          source: {
            code: `
          <div class="container">
            <button class="d-btn d-btn-link vs">Link</button>
            <button class="d-btn d-btn-link sm">Link</button>
            <button class="d-btn d-btn-link md">Link</button>
            <button class="d-btn d-btn-link lg">Link</button>
            <button class="d-btn d-btn-link xl">Link</button>
            <button class="d-btn d-btn-link xxl">Link</button>
          </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };
  

  export const ButtonLoader: Story = {
    args: {
      label: 'Button',
      variant: 'button-loader',
      heading:'Button Loader'
    },

    parameters: {
        docs: {
          source: {
            code: `
     <div class="container">
        <button class="d-btn loading-button loader-vs">
        </button>
        <button class="d-btn loading-button loader-sm">
        </button>
        <button class="d-btn loading-button loader-md">
        </button>
        <button class="d-btn loading-button loader-lg">
        </button>
        <button class="d-btn loading-button loader-xl">
        </button>
        <button class="d-btn loading-button loader-xxl ">
        </button>
      </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };

  export const Disabled: Story = {
    args: {
      label: 'Disabled',
      variant: 'disabled',
      heading:'Disabled',
    },

    parameters: {
        docs: {
          source: {
            code: `
          <div class="container">
            <button class="d-btn d-btn-primary-disable md"> Disabled </button>
            <button class="d-btn d-btn-secondary-disable md"> Disabled </button>
            <button class="d-btn d-btn-tertiary-disable md"> Disabled </button>
          </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };


  export const ErrorAndSuccess: Story = {
    args: {
      label: 'Button',
      variant: 'error-and-success',
      heading:'Error And Success'
    },
    parameters: {
        docs: {
          source: {
            code: `
        <div class="container">
          <button class="d-btn d-btn-success md"> Success </button>
          <button class="d-btn d-btn-danger md"> Danger </button>
        </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };