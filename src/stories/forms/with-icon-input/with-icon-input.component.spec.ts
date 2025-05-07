import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIconInputComponent } from './with-icon-input.component';

describe('WithIconInputComponent', () => {
  let component: WithIconInputComponent;
  let fixture: ComponentFixture<WithIconInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithIconInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithIconInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
