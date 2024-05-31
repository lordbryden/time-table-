import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../services/timetable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  timetables: any[] = [];

  constructor(private timetableService: TimetableService ,private router: Router) {}


  ngOnInit() {
    this.timetables = this.timetableService.getTimetables();
  }
  viewTimetable(id: string) {
    this.router.navigate(['/view-timetable', id]);
  }

  editTimetable(id: string) {
    this.router.navigate(['/timetable', id]);
  }
}
