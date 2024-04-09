import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseComponent } from './upper-case.component';

describe('UpperCaseComponent', () => {
  let component: UpperCaseComponent;
  let fixture: ComponentFixture<UpperCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
