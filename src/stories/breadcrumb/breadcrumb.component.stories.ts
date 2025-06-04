import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';
import { CommonModule } from '@angular/common';

const meta: Meta<BreadcrumbComponent> = {
  title: 'Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,BreadcrumbComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;




export const WithoutIcon: Story = {
  args: {
    inputClass: 'without-icon',
    heading: 'Without Icon',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <nav aria-label="breadcrumb" class="breadcrumb">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item"><span class="back-slash">/</span><a href="#">Home</a></li>
            <li class="breadcrumb-item"><span class="back-slash">/</span><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page"><span class="back-slash">/</span>Data</li>
          </ol>
        </nav>



        <nav aria-label="breadcrumb" class="breadcrumb">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">
              <span class="icon-rightarrow"></span><a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <span class="icon-rightarrow"></span>Data
            </li>
          </ol>
        </nav>
        `.trim(),
        language: 'html',
      },
    },
  },
};


export const WithIcon: Story = {
  args: {
    inputClass: 'with-icon',
    heading: 'With Icon',
  },
  parameters: {
    docs: {
      source: {
        code: `
       <div class="containers">
        <nav aria-label="breadcrumb" class="breadcrumb">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item">
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span><a href="#">Home</a>
              </div>
            </li>
            <li class="breadcrumb-item">
              <span class="back-slash">/</span>
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span> <a href="#">Library</a>
              </div>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <span class="back-slash">/</span>
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span>Data
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="containers">
        <nav aria-label="breadcrumb" class="breadcrumb">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item">
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span><a href="#">Home</a>
              </div>
            </li>
            <li class="breadcrumb-item">
              <span class="icon-rightarrow"></span>
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span><a href="#">Library</a>
              </div>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <span class="icon-rightarrow"></span>
              <div class="star-bread">
                <span class="icon-Vector-9 star"></span>Data
              </div>
            </li>
          </ol>
        </nav>
      </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};




export const MoreButtonIcon: Story = {
  args: {
    inputClass: 'morebutton-icon',
    heading: 'with More Button Icon',
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
