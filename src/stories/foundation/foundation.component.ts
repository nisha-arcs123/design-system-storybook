import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foundation',
  imports: [CommonModule],
  templateUrl: './foundation.component.html',
  styleUrl: './foundation.component.scss'
})

export class FoundationComponent {
  @Input() label : string = "Default Input";
  @Input() heading : string = "Default heading";
  @Input() foundClass : 'colors' | 'rounded-corner' | 'shadow' | 'margin' | 'padding' | 'typography' = 'colors';
  
  selectedTab: string = 'desktop';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
