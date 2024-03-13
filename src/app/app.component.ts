import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MockParametersComponent } from './components/mock-parameters/mock-parameters.component';
import { MockPreviewComponent } from './components/mock-preview/mock-preview.component';
import { MockFormComponent } from './components/mock-form/mock-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MockParametersComponent,
    MockPreviewComponent,
    MockFormComponent,
  ],
})
export class AppComponent {
  title = 'mock-creator';
  mockData: { id: number; date: string }[] = [];
  onDateRange(dateRange: { fromDateValue: string; toDateValue: string }) {
    const { fromDateValue, toDateValue } = dateRange;
    if (fromDateValue && toDateValue) {
      this.mockData = this.generateData(fromDateValue, toDateValue);
    }
  }

  generateData(fromDate: string, toDate: string) {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const data = [];

    let currentDate = startDate;
    while (currentDate <= endDate) {
      const dataItem = {
        id: Math.floor(Math.random() * 1000),
        date: this.dateToUtc(currentDate),
      };
      data.push(dataItem);

      currentDate.setDate(currentDate.getDate() + 1);
    }
    return data;
  }

  dateToUtc(date: Date) {
    return `${date.getUTCDate()} ${
      date.getUTCMonth() + 1
    } ${date.getUTCFullYear()}`;
  }
}
