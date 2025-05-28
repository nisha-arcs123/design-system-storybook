import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-modal-trigger',
  imports: [CommonModule],
  templateUrl: './modal-trigger.component.html',
  styleUrl: './modal-trigger.component.scss',
})
export class ModalTriggerComponent {

  @Input() inputClass: 'dialogue' | 'dialogue2' = 'dialogue';
  @Input() heading = 'Default heading';
  private modalService = inject(NgbModal);

  // open() {
  //   const modalRef = this.modalService.open(ModalContentComponent);
  //   modalRef.componentInstance.name = 'Storybook!';
  // }
  open() {
  const modalRef = this.modalService.open(ModalContentComponent, {
    windowClass: 'custom-modal-width', // 👈 custom class name
    centered: true,
  });
  modalRef.componentInstance.name = 'Storybook!';
}

  // openpopup() {
  //   const modalRef = this.modalService.open(PopupComponent);
  //   modalRef.componentInstance.name = 'Storybook!';
  // }


  openpopup() {
  const modalRef = this.modalService.open(PopupComponent, {
    windowClass: 'popup-modal-width', // 👈 another custom class
    centered: true,
  });
  modalRef.componentInstance.name = 'Storybook!';
}
}
