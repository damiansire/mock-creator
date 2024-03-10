import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mock-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mock-form.component.html',
  styleUrl: './mock-form.component.css',
  providers: [DatePipe],
})
export class MockFormComponent {
  constructor(private datePipe: DatePipe) {}
  @Output() data: EventEmitter<any> = new EventEmitter();

  mockForm = new FormGroup({
    fromDate: new FormControl('2023-03-08'),
    toDate: new FormControl('2023-03-15'),
  });

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

  onSubmit() {
    const fromDateValue = this.mockForm.value.fromDate;
    const toDateValue = this.mockForm.value.toDate;
    if (fromDateValue && toDateValue) {
      this.generateData(fromDateValue, toDateValue);
    }
    console.warn(this.mockForm.value);
  }
}
