import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LableSelectComponent } from './lable-select.component';

describe('LableSelectComponent', () => {
  let component: LableSelectComponent;
  let fixture: ComponentFixture<LableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LableSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
