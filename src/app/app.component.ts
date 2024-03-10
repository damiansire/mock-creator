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
}
