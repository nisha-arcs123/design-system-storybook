import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() inputClass: 'primary-tabs' = 'primary-tabs';
  @Input() heading = 'Default heading';
  selectedTab: string = 'desktop';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
