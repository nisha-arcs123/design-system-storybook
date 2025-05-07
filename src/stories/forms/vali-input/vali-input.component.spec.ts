import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiInputComponent } from './vali-input.component';

describe('ValiInputComponent', () => {
  let component: ValiInputComponent;
  let fixture: ComponentFixture<ValiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
