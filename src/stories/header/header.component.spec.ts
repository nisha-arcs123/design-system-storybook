import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterComponent } from './header.component';

describe('HeaderFooterComponent', () => {
  let component: HeaderFooterComponent;
  let fixture: ComponentFixture<HeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
