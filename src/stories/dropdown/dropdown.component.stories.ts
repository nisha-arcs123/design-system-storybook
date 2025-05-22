import type { Meta ,StoryObj} from "@storybook/angular";
import { DropdownComponent } from "./dropdown.component";

const meta:Meta<DropdownComponent>={
    title:'DropDown',
    component:DropdownComponent,
    tags:['autodocs'],

}

export default meta;
type Story = StoryObj<DropdownComponent>;



export const NormalDropDown:Story = {
    args:{
        inputClass:'normal-drop-down',
        heading:'Normal Drop Down',
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
}



export const DropDownWithChips:Story = {
    args:{
        inputClass:'drop-down-with-chips',
        heading:'Drop Down With Chips',
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
}