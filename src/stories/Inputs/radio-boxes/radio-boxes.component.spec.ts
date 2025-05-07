import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBoxesComponent } from './radio-boxes.component';

describe('RadioBoxesComponent', () => {
  let component: RadioBoxesComponent;
  let fixture: ComponentFixture<RadioBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
