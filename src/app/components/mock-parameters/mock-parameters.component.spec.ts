import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockParametersComponent } from './mock-parameters.component';

describe('MockParametersComponent', () => {
  let component: MockParametersComponent;
  let fixture: ComponentFixture<MockParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
