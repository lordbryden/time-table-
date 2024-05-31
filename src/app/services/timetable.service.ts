import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private timetables: any[] = [];
  private storageKey = 'timetables';

  constructor() {
    const storedTimetables = localStorage.getItem(this.storageKey);
    if (storedTimetables) {
      this.timetables = JSON.parse(storedTimetables);
    }
  }

  getTimetables() {

    return this.timetables;
  }

  getTimetableById(id: string) {
    return this.timetables.find(timetable => timetable.id === id);
  }

  addTimetable(timetable: any) {
    this.timetables.push(timetable);
    this.saveToSession();
  }

  private saveToSession() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.timetables));
  }

  updateTimetable(updatedTimetable: any) {
    const index = this.timetables.findIndex(t => t.id === updatedTimetable.id);
    if (index !== -1) {
      this.timetables[index] = updatedTimetable;
      this.saveToSession();
    }
  }
}
