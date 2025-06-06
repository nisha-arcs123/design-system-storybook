import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftSideBarComponent } from './leftsidebar.component';
describe('LeftSideBarComponent', () => {
  let component: LeftSideBarComponent;
  let fixture: ComponentFixture<LeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
