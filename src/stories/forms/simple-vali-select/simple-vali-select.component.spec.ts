import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValiSelectComponent } from './simple-vali-select.component';

describe('SimpleValiSelectComponent', () => {
  let component: SimpleValiSelectComponent;
  let fixture: ComponentFixture<SimpleValiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleValiSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleValiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
