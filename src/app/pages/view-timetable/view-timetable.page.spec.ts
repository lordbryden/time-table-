import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTimetablePage } from './view-timetable.page';

describe('ViewTimetablePage', () => {
  let component: ViewTimetablePage;
  let fixture: ComponentFixture<ViewTimetablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
