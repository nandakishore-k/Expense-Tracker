import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerCaseComponent } from './lower-case.component';

describe('LowerCaseComponent', () => {
  let component: LowerCaseComponent;
  let fixture: ComponentFixture<LowerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
