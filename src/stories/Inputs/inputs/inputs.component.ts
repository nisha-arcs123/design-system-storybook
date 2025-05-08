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
        customDiv.innerHTML = '<p>2019</p>  <span><h1>March</h1> <p>2019</p> </span>';
        customDiv.style.padding = '16px 24px';
        customDiv.style.textAlign = 'center';
        customDiv.style.fontSize = '22px';
        customDiv.style.fontWeight='700';
        customDiv.style.color = '#FFFFFF';
        customDiv.style.margin='0';
        customDiv.style.backgroundColor='#017BBA';

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
        calendarContainer.prepend(customDiv);
        calendarContainer.appendChild(customButton);
      },
    });
  }
}
