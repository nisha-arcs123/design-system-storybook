import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { IconButtonComponent } from './icon-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconButtonComponent> = {
  title: 'Buttons/Icon Button',
  component: IconButtonComponent,
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
type Story = StoryObj<IconButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CircleCloseButton: Story = {
  args: {
    label: 'Primary',
    iconBtnClass: 'circle-close-button',
    heading: 'Circle Close Button',
    
  },
  parameters: {
    docs: {
      source: {
        code: `
    <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector-7 icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector-7 icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector-7 icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector-7 icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector-7 icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector-7 icon--xxl"></span>
        </button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};

export const CircleMoreButton: Story = {
  args: {
    label: 'Primary',
    iconBtnClass: 'circle-more-button',
    heading: 'Circle More Button',
  },
  parameters: {
    docs: {
      source: {
        code: `
     <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-dots-horizontal-5 icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-dots-horizontal-5 icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-dots-horizontal-5 icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-dots-horizontal-5 icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-dots-horizontal-5 icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-dots-horizontal-5 icon--xxl"></span>
        </button>
      </div>
         `.trim(),
        language: 'html',
      },
    },
  },
};

export const CircleBackButton: Story = {
  args: {
    label: 'Secondary',
    iconBtnClass: 'circle-back-button',
    heading:'Circle Back Button',
  },
  parameters: {
    docs: {
      source: {
        code: `
    <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector-6 icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector-6 icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector-6 icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector-6 icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector-6 icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector-6 icon--xxl"></span>
        </button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};

export const CircleSearchButton: Story = {
  args: {
    label: 'Tertiary',
    iconBtnClass: 'circle-search-button',
    heading:'Circle Search Button',
  },
  parameters: {
    docs: {
      source: {
        code: `
   <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector-3 icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector-3 icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector-3 icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector-3 icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector-3 icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector-3 icon--xxl"></span>
        </button>
      </div>
     `.trim(),
        language: 'html',
      },
    },
  },
};

export const EditButtonCircleTertiary: Story = {
  args: {
    label: 'Link',
    iconBtnClass: 'edit-button-circle-tertiary',
    heading:'Edit Button Circle Tertiary',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector-1 icon--vs"></span>Edit
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector-1 icon--sm"></span>Edit
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector-1 icon--md"></span>Edit
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector-1 icon--lg"></span>Edit
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector-1 icon--xl"></span>Edit
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector-1 icon--xxl"></span>Edit
        </button>
      </div>

     <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector-1 icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector-1 icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector-1 icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector-1 icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector-1 icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector-1 icon--xxl"></span>
        </button>
      </div>
         `.trim(),
        language: 'html',
      },
    },
  },
};

export const DeleteButtonCircleTertiary: Story = {
  args: {
    label: 'Button',
    iconBtnClass: 'delete-button-circle-tertiary',
    heading:'Delete Button Circle Tertiary',
  },

  parameters: {
    docs: {
      source: {
        code: `
      <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector icon--vs"></span>
          Delete
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector icon--sm"></span>
          Delete
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector icon--md"></span>
          Delete
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector icon--lg"></span>
          Delete
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector icon--xl"></span>
          Delete
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector icon--xxl"></span>
          Delete
        </button>
      </div>
     <div class="containers">
        <button class="d-btn d-btn--tertiary vs">
          <span class="icon-Vector icon--vs"></span>
        </button>
        <button class="d-btn d-btn--tertiary sm">
          <span class="icon-Vector icon--sm"></span>
        </button>
        <button class="d-btn d-btn--tertiary md">
          <span class="icon-Vector icon--md"></span>
        </button>
        <button class="d-btn d-btn--tertiary lg">
          <span class="icon-Vector icon--lg"></span>
        </button>
        <button class="d-btn d-btn--tertiary xl">
          <span class="icon-Vector icon--xl"></span>
        </button>
        <button class="d-btn d-btn--tertiary double-xl">
          <span class="icon-Vector icon--xxl"></span>
        </button>
      </div>
         `.trim(),
        language: 'html',
      },
    },
  },
};

export const IconRight: Story = {
  args: {
    label: 'Disabled',
    iconBtnClass: 'icon-right',
    heading:'Icon right'
  },

  parameters: {
    docs: {
      source: {
        code: `
          <div class="containers">
        <button class="d-btn d-btn--primary vs">
          Very Small
          <span class="icon-Vector-5 add--vs"></span>
        </button>
        <button class="d-btn d-btn--primary sm">
          Small
          <span class="icon-Vector-5 add--sm"></span>
        </button>
        <button class="d-btn d-btn--primary md">
          Medium
          <span class="icon-Vector-5 add--md"></span>
        </button>
        <button class="d-btn d-btn--primary lg">
          Large
          <span class="icon-Vector-5 add--lg"></span>
        </button>
        <button class="d-btn d-btn--primary xl">
          Extra Large
          <span class="icon-Vector-5 add--xl"></span>
        </button>
        <button class="d-btn d-btn--primary double-xl">
          XX Large
          <span class="icon-Vector-5 add--xxl"></span>
        </button>
      </div>
         `.trim(),
        language: 'html',
      },
    },
  },
};

export const IconLeft: Story = {
  args: {
    label: 'button',
    iconBtnClass: 'icon-left',
    heading:'Icon Left'
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="containers">
        <button class="d-btn d-btn--primary vs">
          <span class="icon-Vector-5 add--vs"></span>
          Very Small
        </button>
        <button class="d-btn d-btn--primary sm">
          <span class="icon-Vector-5 add--sm"></span>
          Small
        </button>
        <button class="d-btn d-btn--primary md">
          <span class="icon-Vector-5 add--md"></span>
          Medium
        </button>
        <button class="d-btn d-btn--primary lg">
          <span class="icon-Vector-5 add--lg"></span>
          Large
        </button>
        <button class="d-btn d-btn--primary xl">
          <span class="icon-Vector-5 add--xl"></span>
          Extra Large
        </button>
        <button class="d-btn d-btn--primary double-xl">
          <span class="icon-Vector-5 add--xxl"></span>
          XX Large
        </button>
      </div>
         `.trim(),
        language: 'html',
      },
    },
  },
};


export const AddButton: Story = {
  args: {
    label: 'button',
    iconBtnClass: 'add-btn',
    heading:'Secondary Circle Add Button'
  },
  parameters: {
    docs: {
      source: {
        code: `
      <div class="containers">
        <button class="d-btn d-btn--secondary-dotted vs">
          <span class="icon-Vector-4 add--vs"></span>
          Add
        </button>
        <button class="d-btn d-btn--secondary-dotted sm">
          <span class="icon-Vector-4 add--sm"></span>
          Add
        </button>
        <button class="d-btn d-btn--secondary-dotted md">
          <span class="icon-Vector-4 add--md"></span>
          Medium
        </button>
        <button class="d-btn d-btn--secondary-dotted lg">
          <span class="icon-Vector-4 add--lg"></span>
          Large
        </button>
        <button class="d-btn d-btn--secondary-dotted xl">
          <span class="icon-Vector-4 add--xl"></span>
          Extra Large
        </button>
        <button class="d-btn d-btn--secondary-dotted double-xl">
          <span class="icon-Vector-4 add--xxl"></span>
          XXL Large
        </button>
      </div>



      <div class="containers">
        <button class="d-btn d-btn--secondary vs">
          <span class="icon-Vector-4 add--vs"></span>
          Add
        </button>
        <button class="d-btn d-btn--secondary sm">
          <span class="icon-Vector-4 add--sm"></span>
          Add
        </button>
        <button class="d-btn d-btn--secondary md">
          <span class="icon-Vector-4 add--md"></span>
          Medium
        </button>
        <button class="d-btn d-btn--secondary lg">
          <span class="icon-Vector-4 add--lg"></span>
          Large
        </button>
        <button class="d-btn d-btn--secondary xl">
          <span class="icon-Vector-4 add--xl"></span>
          Extra Large
        </button>
        <button class="d-btn d-btn--secondary double-xl">
          <span class="icon-Vector-4 add--xxl"></span>
          XXL Large
        </button>
      </div>



      <div class="containers">
        <button class="d-btn--circle dotted-circle vs">
          <span class="icon-Vector-4 add--vs"></span>
        </button>
        <button class="d-btn--circle dotted-circle sm">
          <span class="icon-Vector-4 add--sm"></span>
        </button>
        <button class="d-btn--circle dotted-circle md">
          <span class="icon-Vector-4 add--md"></span>
        </button>
        <button class="d-btn--circle dotted-circle lg">
          <span class="icon-Vector-4 add--lg"></span>
        </button>
        <button class="d-btn--circle dotted-circle xl">
          <span class="icon-Vector-4 add--xl"></span>
        </button>
        <button class="d-btn--circle dotted-circle double-xl">
          <span class="icon-Vector-4 add--xxl"></span>
        </button>
      </div>
      



      <div class="containers">
        <button class="d-btn--circle solid-circle vs">
          <span class="icon-Vector-4 add--vs"></span>
        </button>
        <button class="d-btn--circle solid-circle sm">
          <span class="icon-Vector-4 add--sm"></span>
        </button>
        <button class="d-btn--circle solid-circle md">
          <span class="icon-Vector-4 add--md"></span>
        </button>
        <button class="d-btn--circle solid-circle lg">
          <span class="icon-Vector-4 add--lg"></span>
        </button>
        <button class="d-btn--circle solid-circle xl">
          <span class="icon-Vector-4 add--xl"></span>
        </button>
        <button class="d-btn--circle solid-circle double-xl">
          <span class="icon-Vector-4 add--xxl"></span>
        </button>
      </div>




      <div class="containers">
        <button class="d-btn--circle primary-bg-circle vs">
          <span class="icon-Vector-5 add--vs"></span>
        </button>
        <button class="d-btn--circle primary-bg-circle sm">
          <span class="icon-Vector-5 add--sm"></span>
        </button>
        <button class="d-btn--circle primary-bg-circle md">
          <span class="icon-Vector-5 add--md"></span>
        </button>
        <button class="d-btn--circle primary-bg-circle lg">
          <span class="icon-Vector-5 add--lg"></span>
        </button>
        <button class="d-btn--circle primary-bg-circle xl">
          <span class="icon-Vector-5 add--xl"></span>
        </button>
        <button class="d-btn--circle primary-bg-circle double-xl">
          <span class="icon-Vector-5 add--xxl"></span>
        </button>
      </div>



         `.trim(),
        language: 'html',
      },
    },
  },
};