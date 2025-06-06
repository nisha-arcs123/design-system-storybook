import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutComponent } from './full-layout-page.component';

describe('FullLayoutComponent', () => {
  let component: FullLayoutComponent;
  let fixture: ComponentFixture<FullLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
