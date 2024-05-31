import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimetableService } from 'src/app/services/timetable.service';

@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.page.html',
  styleUrls: ['./view-timetable.page.scss'],
})
export class ViewTimetablePage implements OnInit {
  timetable: any;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private route: ActivatedRoute, private timetableService: TimetableService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const timetable = this.timetableService.getTimetableById(id);
      this.timetable = timetable.schedule
    }
  }
}
