import { CommonModule } from '@angular/common';
import { Component, Input,inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  imports: [CommonModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss',
})
export class ModalContentComponent {
  @Input() inputClass: 'modalcontent' = 'modalcontent';
  @Input() heading = 'Default heading';

  activeModal = inject(NgbActiveModal);
}
