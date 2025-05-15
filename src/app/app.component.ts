import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { HeaderFooterComponent } from '../stories/header-footer/header-footer.component';
// import { GridLayoutComponent } from '../stories/grid-layout/grid-layout.component';
// import { ButtonComponent } from '../stories/buttons/button/button.component';head

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-system';

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
