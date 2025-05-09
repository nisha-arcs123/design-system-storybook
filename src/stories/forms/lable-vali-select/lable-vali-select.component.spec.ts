import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LableValiSelectComponent } from './lable-vali-select.component';

describe('LableValiSelectComponent', () => {
  let component: LableValiSelectComponent;
  let fixture: ComponentFixture<LableValiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LableValiSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LableValiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
