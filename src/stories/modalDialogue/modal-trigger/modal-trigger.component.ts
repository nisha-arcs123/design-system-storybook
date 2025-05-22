import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
@Component({
  selector: 'app-modal-trigger',
  imports: [CommonModule],
  templateUrl: './modal-trigger.component.html',
  styleUrl: './modal-trigger.component.scss',
})
export class ModalTriggerComponent {
  @Input() inputClass: 'dialogue' = 'dialogue';
  @Input() heading = 'Default heading';

  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'Storybook!';
  }
}
