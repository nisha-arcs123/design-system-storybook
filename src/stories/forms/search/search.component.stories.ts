import type {Meta , StoryObj } from "@storybook/angular";
import { SearchComponent } from "./search.component";


const meta: Meta<SearchComponent> ={
    title:'Forms/ Search',
    component: SearchComponent,
    tags:['autodocs'],

};


export default meta;
type Story = StoryObj<SearchComponent>;



export const SimpleSearch : Story ={
    args : {
        searchClass : 'simple-search',
        heading : 'Simple Search',
    },
    parameters:{
        docs:{
            source:{
                code:`
                 <div class="search-container">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.125 10C3.7625 10 2.60938 9.52813 1.66563 8.58438C0.721875 7.64063 0.25 6.4875 0.25 5.125C0.25 3.7625 0.721875 2.60938 1.66563 1.66563C2.60938 0.721875 3.7625 0.25 5.125 0.25C6.4875 0.25 7.64063 0.721875 8.58438 1.66563C9.52813 2.60938 10 3.7625 10 5.125C10 5.675 9.9125 6.19375 9.7375 6.68125C9.5625 7.16875 9.325 7.6 9.025 7.975L13.225 12.175C13.3625 12.3125 13.4313 12.4875 13.4313 12.7C13.4313 12.9125 13.3625 13.0875 13.225 13.225C13.0875 13.3625 12.9125 13.4313 12.7 13.4313C12.4875 13.4313 12.3125 13.3625 12.175 13.225L7.975 9.025C7.6 9.325 7.16875 9.5625 6.68125 9.7375C6.19375 9.9125 5.675 10 5.125 10ZM5.125 8.5C6.0625 8.5 6.85938 8.17188 7.51563 7.51563C8.17188 6.85938 8.5 6.0625 8.5 5.125C8.5 4.1875 8.17188 3.39063 7.51563 2.73438C6.85938 2.07813 6.0625 1.75 5.125 1.75C4.1875 1.75 3.39063 2.07813 2.73438 2.73438C2.07813 3.39063 1.75 4.1875 1.75 5.125C1.75 6.0625 2.07813 6.85938 2.73438 7.51563C3.39063 8.17188 4.1875 8.5 5.125 8.5Z"
            fill="#676879"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.75 14.75L11.4875 11.4875M13.25 7.25C13.25 10.5637 10.5637 13.25 7.25 13.25C3.93629 13.25 1.25 10.5637 1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25C10.5637 1.25 13.25 3.93629 13.25 7.25Z"
            stroke="#676879"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
                `.trim(),
                language : 'html',

            }
        }
    }
}



export const LabelSearch : Story ={
    args : {
        searchClass : 'lable-search',
        heading: 'Full Search',
    },
    parameters:{
        docs:{
            source:{
                code:`
               <div class="search-container">
        <div class="search-box search-box--sm">
          <span class="search-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 14.75L11.4875 11.4875M13.25 7.25C13.25 10.5637 10.5637 13.25 7.25 13.25C3.93629 13.25 1.25 10.5637 1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25C10.5637 1.25 13.25 3.93629 13.25 7.25Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input type="text" placeholder="Search here..." />
          <button type="button">Search</button>
        </div>
      </div>


      <div class="search-container">
        <div class="search-box">
          <span class="search-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 14.75L11.4875 11.4875M13.25 7.25C13.25 10.5637 10.5637 13.25 7.25 13.25C3.93629 13.25 1.25 10.5637 1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25C10.5637 1.25 13.25 3.93629 13.25 7.25Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input type="text" placeholder="Search here..." />
          <button type="button">Search</button>
        </div>
      </div>


      <div class="search-container">
        <div class="search-box-app">
          <input type="text" placeholder="Search here..." />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 14.75L11.4875 11.4875M13.25 7.25C13.25 10.5637 10.5637 13.25 7.25 13.25C3.93629 13.25 1.25 10.5637 1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25C10.5637 1.25 13.25 3.93629 13.25 7.25Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </div>
      </div>
                `.trim(),
                language:'html',
            }
        }
    }

}