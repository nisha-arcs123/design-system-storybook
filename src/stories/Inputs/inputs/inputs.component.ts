import { CommonModule } from '@angular/common';
import { Component ,Input,AfterViewInit, ViewChild} from '@angular/core';
import flatpickr from 'flatpickr';
@Component({
  selector: 'app-inputs',
  imports: [CommonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input() label = 'Type something...';
  @Input() heading: string = 'Default Heading';
  @Input() inputClass: 'checkbox' | 'radio' | 'date&time' | 'switch' = 'checkbox';

  
  currentDate = new Date();
  selectedDate: Date | null = null;

  get monthDays(): number[] {
    const days = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  selectDate(day: number) {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

}
