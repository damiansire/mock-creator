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

  onSubmit() {
    const fromDateValue = this.mockForm.value.fromDate;
    const toDateValue = this.mockForm.value.toDate;
    this.data.emit({ fromDateValue, toDateValue });
  }
}
