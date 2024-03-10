import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPreviewComponent } from './mock-preview.component';

describe('MockPreviewComponent', () => {
  let component: MockPreviewComponent;
  let fixture: ComponentFixture<MockPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
