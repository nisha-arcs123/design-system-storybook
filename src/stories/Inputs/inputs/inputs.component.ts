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

  
  ngAfterViewInit() {
    flatpickr('#myDatePicker', {
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      onReady: (selectedDates, dateStr, instance) => {
        // Create a custom div
        const customDiv = document.createElement('div');
        customDiv.innerText = 'Custom Note or Message';
        customDiv.style.padding = '10px';
        customDiv.style.textAlign = 'center';
        customDiv.style.fontSize = '14px';
        customDiv.style.color = 'gray';

        // Create a custom button
        const customButton = document.createElement('button');
        customButton.innerText = 'Today';
        customButton.style.margin = '10px auto';
        customButton.style.display = 'block';
        customButton.style.backgroundColor = '#007bff';
        customButton.style.color = '#fff';
        customButton.style.border = 'none';
        customButton.style.padding = '5px 10px';
        customButton.style.borderRadius = '4px';
        customButton.onclick = () => instance.setDate(new Date());

        // Append to the calendar container
        const calendarContainer = instance.calendarContainer;
        calendarContainer.appendChild(customDiv);
        calendarContainer.appendChild(customButton);
      },
    });
  }
}
