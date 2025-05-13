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


      <div class="container">
        <button class="d-btn-small d-btn-small--danger">High</button>
        <button class="d-btn-small d-btn-small--warning">Medium</button>
        <button class="d-btn-small d-btn-small--success">Low</button>
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



       <div class="container">
        <button class="squr-btn">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.90044 1.53385C9.57842 1.28337 9.41736 1.15813 9.23952 1.10998C9.08268 1.06751 8.91732 1.06751 8.76048 1.10998C8.58264 1.15813 8.42158 1.28337 8.09956 1.53385L1.88244 6.36938C1.46685 6.69262 1.25906 6.85424 1.10936 7.05664C0.976756 7.23592 0.877967 7.4379 0.817861 7.65265C0.75 7.89508 0.75 8.15833 0.75 8.68486V15.3169C0.75 16.3436 0.75 16.8569 0.949824 17.2492C1.12559 17.5941 1.40605 17.8746 1.75102 18.0504C2.14319 18.2502 2.65657 18.2502 3.68333 18.2502H5.51667C5.77336 18.2502 5.9017 18.2502 5.99975 18.2002C6.08599 18.1563 6.15611 18.0862 6.20004 17.9999C6.25 17.9018 6.25 17.7735 6.25 17.5169V11.4669C6.25 10.9534 6.25 10.6968 6.34991 10.5007C6.4378 10.3282 6.57803 10.188 6.75051 10.1001C6.94659 10.0002 7.20324 10.0002 7.71667 10.0002H10.2833C10.7968 10.0002 11.0534 10.0002 11.2495 10.1001C11.422 10.188 11.5622 10.3282 11.6501 10.5007C11.75 10.6968 11.75 10.9534 11.75 11.4669V17.5169C11.75 17.7735 11.75 17.9018 11.8 17.9999C11.8439 18.0862 11.914 18.1563 12.0002 18.2002C12.0983 18.2502 12.2267 18.2502 12.4833 18.2502H14.3167C15.3434 18.2502 15.8569 18.2502 16.249 18.0504C16.5939 17.8746 16.8744 17.5941 17.0502 17.2492C17.25 16.8569 17.25 16.3436 17.25 15.3169V8.68486C17.25 8.15833 17.25 7.89508 17.1822 7.65265C17.122 7.4379 17.0232 7.23592 16.8907 7.05664C16.741 6.85424 16.5332 6.69262 16.1176 6.36939L9.90044 1.53385Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8327 1.08008V4.86641C10.8327 5.37978 10.8327 5.63648 10.9326 5.83256C11.0205 6.00504 11.1607 6.14527 11.3332 6.23316C11.5293 6.33307 11.7859 6.33307 12.2993 6.33307H16.0856M10.8327 14.583H5.33268M12.666 10.9163H5.33268M16.3327 8.15554V14.7663C16.3327 16.3065 16.3327 17.0765 16.0329 17.6648C15.7693 18.1823 15.3486 18.603 14.8312 18.8666C14.2429 19.1663 13.4729 19.1663 11.9327 19.1663H6.06602C4.52587 19.1663 3.7558 19.1663 3.16754 18.8666C2.65009 18.603 2.2294 18.1823 1.96575 17.6648C1.66602 17.0765 1.66602 16.3065 1.66602 14.7663V5.23301C1.66602 3.69286 1.66602 2.92279 1.96575 2.33454C2.2294 1.81709 2.65009 1.39639 3.16754 1.13274C3.7558 0.833008 4.52587 0.833008 6.06602 0.833008H9.01017C9.68272 0.833008 10.019 0.833008 10.3356 0.90899C10.6162 0.976356 10.8844 1.08747 11.1305 1.23825C11.408 1.40831 11.6458 1.64612 12.1214 2.12174L15.0439 5.04428C15.5196 5.5199 15.7574 5.75771 15.9274 6.03523C16.0782 6.28127 16.1893 6.54952 16.2567 6.83012C16.3327 7.14661 16.3327 7.48292 16.3327 8.15554Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.7 0.833008H2.21667C1.70329 0.833008 1.44659 0.833008 1.25051 0.932925C1.07803 1.02083 0.937797 1.16099 0.849907 1.33351C0.75 1.52958 0.75 1.78625 0.75 2.29967V5.78301C0.75 6.29643 0.75 6.5531 0.849907 6.74917C0.937797 6.92169 1.07803 7.06185 1.25051 7.14976C1.44659 7.24967 1.70329 7.24967 2.21667 7.24967H5.7C6.21338 7.24967 6.47007 7.24967 6.66616 7.14976C6.83864 7.06185 6.97887 6.92169 7.06676 6.74917C7.16667 6.5531 7.16667 6.29643 7.16667 5.78301V2.29967C7.16667 1.78625 7.16667 1.52958 7.06676 1.33351C6.97887 1.16099 6.83864 1.02083 6.66616 0.932925C6.47007 0.833008 6.21338 0.833008 5.7 0.833008Z" stroke="#344563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <button class="squr-btn">
         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75065 14.1663C11.2945 14.1663 14.1673 11.2935 14.1673 7.74967C14.1673 4.20584 11.2945 1.33301 7.75065 1.33301C4.20682 1.33301 1.33398 4.20584 1.33398 7.74967C1.33398 11.2935 4.20682 14.1663 7.75065 14.1663Z" stroke="#344563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <button class="squr-btn">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8327 9.08301H5.33268M7.16602 12.7497H5.33268M12.666 5.41634H5.33268M16.3327 8.62467V5.23301C16.3327 3.69286 16.3327 2.92279 16.0329 2.33454C15.7693 1.81709 15.3486 1.39639 14.8312 1.13274C14.2429 0.833008 13.4729 0.833008 11.9327 0.833008H6.06602C4.52587 0.833008 3.7558 0.833008 3.16754 1.13274C2.65009 1.39639 2.2294 1.81709 1.96575 2.33454C1.66602 2.92279 1.66602 3.69286 1.66602 5.23301V14.7663C1.66602 16.3065 1.66602 17.0765 1.96575 17.6648C2.2294 18.1823 2.65009 18.603 3.16754 18.8666C3.7558 19.1663 4.52587 19.1663 6.06602 19.1663H8.54102M18.166 19.1663L16.791 17.7913M17.7077 15.4997C17.7077 17.2716 16.2713 18.708 14.4993 18.708C12.7274 18.708 11.291 17.2716 11.291 15.4997C11.291 13.7278 12.7274 12.2913 14.4993 12.2913C16.2713 12.2913 17.7077 13.7278 17.7077 15.4997Z"
              stroke="#323238"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1673 9.16157V10.0049C19.1662 11.9816 18.5261 13.905 17.3425 15.4882C16.159 17.0715 14.4953 18.2297 12.5998 18.7901C10.7041 19.3506 8.67817 19.2833 6.82391 18.5983C4.96969 17.9133 3.38658 16.6472 2.3107 14.9889C1.23481 13.3307 0.72379 11.369 0.853856 9.39651C0.983912 7.42411 1.74809 5.54656 3.03241 4.04391C4.31672 2.54125 6.05237 1.49403 7.98049 1.05839C9.90862 0.622754 11.9259 0.822064 13.7315 1.62659M19.1673 2.66634L10.0006 11.8422L7.25065 9.09218"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.50065 12.7497L6.33398 14.583L10.459 10.458M6.33398 6.33301V3.76634C6.33398 2.73958 6.33398 2.22619 6.53381 1.83403C6.70957 1.48906 6.99003 1.20859 7.335 1.03283C7.72717 0.833008 8.24056 0.833008 9.26732 0.833008H16.234C17.2607 0.833008 17.7742 0.833008 18.1663 1.03283C18.5113 1.20859 18.7918 1.48906 18.9675 1.83403C19.1673 2.22619 19.1673 2.73958 19.1673 3.76634V10.733C19.1673 11.7598 19.1673 12.2732 18.9675 12.6653C18.7918 13.0103 18.5113 13.2908 18.1663 13.4665C17.7742 13.6663 17.2607 13.6663 16.234 13.6663H13.6673M3.76732 19.1663H10.734C11.7607 19.1663 12.2742 19.1663 12.6663 18.9665C13.0113 18.7908 13.2918 18.5103 13.4675 18.1653C13.6673 17.7732 13.6673 17.2598 13.6673 16.233V9.26634C13.6673 8.23958 13.6673 7.72619 13.4675 7.33403C13.2918 6.98906 13.0113 6.70859 12.6663 6.53283C12.2742 6.33301 11.7607 6.33301 10.734 6.33301H3.76732C2.74056 6.33301 2.22717 6.33301 1.835 6.53283C1.49003 6.70859 1.20957 6.98906 1.03381 7.33403C0.833984 7.72619 0.833984 8.23958 0.833984 9.26634V16.233C0.833984 17.2598 0.833984 17.7732 1.03381 18.1653C1.20957 18.5103 1.49003 18.7908 1.835 18.9665C2.22717 19.1663 2.74055 19.1663 3.76732 19.1663Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 4.33301H11.75M11.75 4.33301C11.75 5.8518 12.9812 7.08301 14.5 7.08301C16.0188 7.08301 17.25 5.85179 17.25 4.33301C17.25 2.81423 16.0188 1.58301 14.5 1.58301C12.9812 1.58301 11.75 2.81423 11.75 4.33301ZM6.25 11.6663H17.25M6.25 11.6663C6.25 13.1852 5.01878 14.4163 3.5 14.4163C1.98122 14.4163 0.75 13.1852 0.75 11.6663C0.75 10.1475 1.98122 8.91634 3.5 8.91634C5.01878 8.91634 6.25 10.1475 6.25 11.6663Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66601 13.5833L2.66601 13.4C2.66601 11.8598 2.66601 11.0898 2.96576 10.5015C3.2294 9.98404 3.65006 9.56338 4.16752 9.29975C4.75583 9 5.52583 9 7.06602 9L12.9327 9C14.4728 9 15.2429 9 15.8312 9.29975C16.3486 9.56338 16.7693 9.98404 17.033 10.5015C17.3327 11.0898 17.3327 11.8598 17.3327 13.4L17.3327 13.5833M2.66601 13.5833C1.65346 13.5833 0.832681 14.4041 0.832681 15.4167C0.832681 16.4292 1.65346 17.25 2.66601 17.25C3.67856 17.25 4.49935 16.4292 4.49935 15.4167C4.49935 14.4041 3.67856 13.5833 2.66601 13.5833ZM17.3327 13.5833C16.3202 13.5833 15.4993 14.4041 15.4993 15.4167C15.4993 16.4292 16.3202 17.25 17.3327 17.25C18.3452 17.25 19.166 16.4292 19.166 15.4167C19.166 14.4041 18.3452 13.5833 17.3327 13.5833ZM9.99935 4.41667L9.99935 13.5833M9.99935 4.41667C8.9868 4.41667 8.16602 3.59586 8.16602 2.58333C8.16602 1.57081 8.9868 0.75 9.99935 0.75C11.0119 0.75 11.8327 1.57081 11.8327 2.58333C11.8327 3.59586 11.0119 4.41667 9.99935 4.41667ZM9.99935 13.5833C8.9868 13.5833 8.16601 14.4041 8.16601 15.4167C8.16601 16.4292 8.9868 17.25 9.99935 17.25C11.0119 17.25 11.8327 16.4292 11.8327 15.4167C11.8327 14.4041 11.0119 13.5833 9.99935 13.5833Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33315 7.24967C7.54866 6.63704 7.97404 6.12044 8.53398 5.79138C9.09388 5.46232 9.75214 5.34204 10.3923 5.45183C11.0324 5.56162 11.6129 5.8944 12.0312 6.39124C12.4493 6.88808 12.6783 7.5169 12.6773 8.16634C12.6773 9.99967 9.92732 10.9163 9.92732 10.9163M10.0007 14.583H10.0098M19.1673 9.99967C19.1673 15.0622 15.0632 19.1663 10.0007 19.1663C4.93804 19.1663 0.833984 15.0622 0.833984 9.99967C0.833984 4.93706 4.93804 0.833008 10.0007 0.833008C15.0632 0.833008 19.1673 4.93706 19.1673 9.99967Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="squr-btn">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79447 17.5003C7.38206 18.019 8.15398 18.3337 8.99931 18.3337C9.84473 18.3337 10.6166 18.019 11.2041 17.5003M13.9993 6.66699C13.9993 5.34091 13.4726 4.06914 12.5349 3.13146C11.5971 2.19378 10.3254 1.66699 8.99931 1.66699C7.67323 1.66699 6.40148 2.19378 5.46379 3.13146C4.52611 4.06914 3.99933 5.34091 3.99933 6.66699C3.99933 9.24216 3.34972 11.0053 2.62404 12.1715C2.01194 13.1552 1.70588 13.6471 1.71709 13.7843C1.72953 13.9362 1.76171 13.9942 1.88414 14.085C1.99471 14.167 2.49315 14.167 3.49004 14.167H14.5086C15.5055 14.167 16.004 14.167 16.1145 14.085C16.237 13.9942 16.2691 13.9362 16.2816 13.7843C16.2928 13.6471 15.9867 13.1552 15.3746 12.1715C14.6489 11.0053 13.9993 9.24216 13.9993 6.66699Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.175 0L5 3.81667L8.825 0L10 1.175L5 6.175L0 1.175L1.175 0Z"
              fill="#676879"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1.83333V11H0V0ZM3.20833 5.5L11 11V0L3.20833 5.5ZM9.16667 7.46167L6.38917 5.5L9.16667 3.53833V7.46167Z"
              fill="#676879"
            />
          </svg>
        </button>

        <button class="squr-btn">
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.50047 11L6.79297 9.7075L2.59464 5.5L6.79297 1.2925L5.50047 -3.51413e-07L0.000468349 5.5L5.50047 11Z"
              fill="#676879"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2925 0L0 1.2925L4.19833 5.5L0 9.7075L1.2925 11L6.7925 5.5L1.2925 0Z"
              fill="#676879"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11L9.16667 11L9.16667 -3.98694e-07L11 -2.38419e-07L11 11ZM7.79167 5.5L7.23232e-07 -1.20007e-06L-2.38419e-07 11L7.79167 5.5ZM1.83333 3.53833L4.61083 5.5L1.83333 7.46167L1.83333 3.53833Z"
              fill="#676879"
            />
          </svg>
        </button>

        <button class="squr-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 14.5L11.2375 11.2375M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 14.5L11.2375 11.2375M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1V7.8C1 8.92013 1 9.48013 1.21799 9.908C1.40973 10.2843 1.71569 10.5903 2.09202 10.782C2.51984 11 3.07989 11 4.2 11H9M9 11C9 12.1046 9.8954 13 11 13C12.1046 13 13 12.1046 13 11C13 9.8954 12.1046 9 11 9C9.8954 9 9 9.8954 9 11ZM1 4.33333H9M9 4.33333C9 5.43791 9.8954 6.33333 11 6.33333C12.1046 6.33333 13 5.4379 13 4.33333C13 3.22877 12.1046 2.33333 11 2.33333C9.8954 2.33333 9 3.22877 9 4.33333Z"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="squr-btn">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9V9.8C13 10.9201 13 11.4801 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4801 13 10.9201 13 9.8 13H4.2C3.07989 13 2.51984 13 2.09202 12.782C1.71569 12.5903 1.40973 12.2843 1.21799 11.908C1 11.4801 1 10.9201 1 9.8V9M10.3333 4.33333L7 1M7 1L3.66667 4.33333M7 1V9"
              stroke="#344563"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="4"
            height="5"
            viewBox="0 0 4 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.177641 0.875H1.07239L1.79839 2.28275L2.56564 0.875H3.40152L2.24989 2.75L3.42777 4.625H2.54614L1.75489 3.15125L0.967016 4.625H0.0722656L1.26964 2.74325L0.177641 0.875Z"
              fill="white"
            />
          </svg>
        </button>
        <button class="squr-btn">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 9.64583C6.55556 9.64583 6.45139 9.62847 6.35417 9.59375C6.25694 9.55903 6.16667 9.5 6.08333 9.41667L3.08333 6.41667C2.91667 6.25 2.83681 6.05556 2.84375 5.83333C2.85069 5.61111 2.93056 5.41667 3.08333 5.25C3.25 5.08333 3.44792 4.99653 3.67708 4.98958C3.90625 4.98264 4.10417 5.0625 4.27083 5.22917L5.83333 6.79167V0.833333C5.83333 0.597222 5.91319 0.399306 6.07292 0.239583C6.23264 0.0798611 6.43056 0 6.66667 0C6.90278 0 7.10069 0.0798611 7.26042 0.239583C7.42014 0.399306 7.5 0.597222 7.5 0.833333V6.79167L9.0625 5.22917C9.22917 5.0625 9.42708 4.98264 9.65625 4.98958C9.88542 4.99653 10.0833 5.08333 10.25 5.25C10.4028 5.41667 10.4826 5.61111 10.4896 5.83333C10.4965 6.05556 10.4167 6.25 10.25 6.41667L7.25 9.41667C7.16667 9.5 7.07639 9.55903 6.97917 9.59375C6.88194 9.62847 6.77778 9.64583 6.66667 9.64583ZM1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8437C0.163194 12.5174 0 12.125 0 11.6667V10C0 9.76389 0.0798611 9.56597 0.239583 9.40625C0.399306 9.24653 0.597222 9.16667 0.833333 9.16667C1.06944 9.16667 1.26736 9.24653 1.42708 9.40625C1.58681 9.56597 1.66667 9.76389 1.66667 10V11.6667H11.6667V10C11.6667 9.76389 11.7465 9.56597 11.9062 9.40625C12.066 9.24653 12.2639 9.16667 12.5 9.16667C12.7361 9.16667 12.934 9.24653 13.0937 9.40625C13.2535 9.56597 13.3333 9.76389 13.3333 10V11.6667C13.3333 12.125 13.1701 12.5174 12.8437 12.8437C12.5174 13.1701 12.125 13.3333 11.6667 13.3333H1.66667Z"
              fill="#344563"
            />
          </svg>
        </button>
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