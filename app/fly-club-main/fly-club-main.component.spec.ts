import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyClubMainComponent } from './fly-club-main.component';

describe('FlyClubMainComponent', () => {
  let component: FlyClubMainComponent;
  let fixture: ComponentFixture<FlyClubMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyClubMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyClubMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
