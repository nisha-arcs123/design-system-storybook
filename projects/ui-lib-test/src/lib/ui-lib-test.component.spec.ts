import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibTestComponent } from './ui-lib-test.component';

describe('UiLibTestComponent', () => {
  let component: UiLibTestComponent;
  let fixture: ComponentFixture<UiLibTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLibTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLibTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
