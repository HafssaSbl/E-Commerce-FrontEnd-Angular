import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDashBoardComponent } from './menu-dash-board.component';

describe('MenuDashBoardComponent', () => {
  let component: MenuDashBoardComponent;
  let fixture: ComponentFixture<MenuDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
