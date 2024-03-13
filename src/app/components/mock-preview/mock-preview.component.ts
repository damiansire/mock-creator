import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mock-preview',
  standalone: true,
  imports: [],
  templateUrl: './mock-preview.component.html',
  styleUrl: './mock-preview.component.css',
})
export class MockPreviewComponent {
  @Input() data: { id: number; date: string }[] = [];
}
