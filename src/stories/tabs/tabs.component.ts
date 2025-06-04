import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, NgbNavModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() inputClass: 'primary-tabs' | 'tertiary-tabs' = 'primary-tabs';
  @Input() heading = 'Default heading';
  activeTab: string = 'auditor'; 
}
