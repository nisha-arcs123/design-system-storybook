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
                 <div class="search-box search-box--sm">
                    <span class="icon-Vector-12"></span>

                    <input type="text" placeholder="Search here..." />
                    <button type="button">Search</button>
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
              <div class="search-box">
                <span class="icon-Vector-12"></span>
                <input type="text" placeholder="Search here..." />
                <button type="button">Search</button>
              </div>


              <div class="search-box-app">
                <input type="text" placeholder="Search here..." />
                <span class="icon-Vector-12"></span>
              </div>
                `.trim(),
                language:'html',
            }
        }
    }

}