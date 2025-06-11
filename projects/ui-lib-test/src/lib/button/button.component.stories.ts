import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Buttons',
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
  },
  parameters: {
    docs: {
      source: {
        code: `
<div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-primary md">label</button>
        <button class="btn btn-secondary md">label</button>
        <button class="btn btn-tertiary md">label</button>
        <button class="btn btn-link md">label</button>
        <button class="btn btn-primary-light md">label</button>
        <button class="btn btn-secondary-light md">label</button>
        <button class="btn btn-tertiary-light md">label</button>
        <button class="btn btn-link-light md">label</button>
      </div>
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
    },
    parameters: {
        docs: {
          source: {
            code: `
  <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-primary vs">label</button>
        <button class="btn btn-primary sm">label</button>
        <button class="btn btn-primary md">label</button>
        <button class="btn btn-primary lg">label</button>
        <button class="btn btn-primary xl">label</button>
        <button class="btn btn-primary double-xl">label</button>
      </div>
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
  },
  parameters: {
    docs: {
      source: {
        code: `
   <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-secondary vs">label</button>
        <button class="btn btn-secondary sm">label</button>
        <button class="btn btn-secondary md">label</button>
        <button class="btn btn-secondary lg">label</button>
        <button class="btn btn-secondary xl">label</button>
        <button class="btn btn-secondary double-xl">label</button>
      </div>
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
  },
  parameters: {
    docs: {
      source: {
        code: `
   <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-tertiary vs">label</button>
        <button class="btn btn-tertiary sm">label</button>
        <button class="btn btn-tertiary md">label</button>
        <button class="btn btn-tertiary lg">label</button>
        <button class="btn btn-tertiary xl">label</button>
        <button class="btn btn-tertiary double-xl">label</button>
      </div>
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
    },
    parameters: {
        docs: {
          source: {
            code: `
       <div class="outer-container">
          <div class="heading">
            <h1>Buttons</h1>
            <div class="line"></div>
            <h2>Buttons Kinds</h2>
            <p>
              There can be more than one button in a screen, but to create the
              hierarchy of actions we need to use button kinds.
            </p>
          </div>
          <div class="containers">
            <button class="btn btn-link vs">label</button>
            <button class="btn btn-link sm">label</button>
            <button class="btn btn-link md">label</button>
            <button class="btn btn-link lg">label</button>
            <button class="btn btn-link xl">label</button>
            <button class="btn btn-link double-xl">label</button>
          </div>
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
    },

    parameters: {
        docs: {
          source: {
            code: `
        <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="loading-button vs">
          <span class="loader"></span>
        </button>
        <button class="loading-button sm">
          <span class="loader"></span>
        </button>
        <button class="loading-button md">
          <span class="loader"></span>
        </button>
        <button class="loading-button lg">
          <span class="loader"></span>
        </button>
        <button class="loading-button xl">
          <span class="loader"></span>
        </button>
        <button class="loading-button double-xl">
          <span class="loader"></span>
        </button>
      </div>
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
    },

    parameters: {
        docs: {
          source: {
            code: `
            <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-primary-disable md">{{ label }}</button>
        <button class="btn btn-secondary-disable md">{{ label }}</button>
        <button class="btn btn-tertiary-disable md">{{ label }}</button>
      </div>
    </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };


  export const ErrorAndSuccess: Story = {
    args: {
      label: 'button',
      variant: 'error-and-success',
    },
    parameters: {
        docs: {
          source: {
            code: `
            <div class="outer-container">
      <div class="heading">
        <h1>Buttons</h1>
        <div class="line"></div>
        <h2>Buttons Kinds</h2>
        <p>
          There can be more than one button in a screen, but to create the
          hierarchy of actions we need to use button kinds.
        </p>
      </div>
      <div class="containers">
        <button class="btn btn-success md"> label </button>
        <button class="btn btn-danger md">label </button>
      </div>
    </div>
         `.trim(),
            language: 'html',
          },
        },
      },
  };