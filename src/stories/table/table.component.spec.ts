import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutComponent } from './table.component';

describe('GridLayoutComponent', () => {
  let component: GridLayoutComponent;
  let fixture: ComponentFixture<GridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
