import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTimetablePage } from './edit-timetable.page';

describe('EditTimetablePage', () => {
  let component: EditTimetablePage;
  let fixture: ComponentFixture<EditTimetablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
