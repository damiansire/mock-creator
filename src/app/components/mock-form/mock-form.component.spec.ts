import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockFormComponent } from './mock-form.component';

describe('MockFormComponent', () => {
  let component: MockFormComponent;
  let fixture: ComponentFixture<MockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
