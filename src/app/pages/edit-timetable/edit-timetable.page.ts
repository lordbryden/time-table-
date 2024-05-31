import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimetableService } from 'src/app/services/timetable.service';

@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.page.html',
  styleUrls: ['./edit-timetable.page.scss'],
})
export class EditTimetablePage implements OnInit {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timetable: { [key: string]: any[] } = {};
  timetableName: string = '';
  timetableId: any = '';

  constructor(
    private route: ActivatedRoute,
    private timetableService: TimetableService,
    private router: Router
  ) { }

  ngOnInit() {
    // Get the timetable ID from the route parameters
    this.timetableId = this.route.snapshot.paramMap.get('id');

    // Load the timetable from the service
    const timetableData = this.timetableService.getTimetableById(this.timetableId);
    if (timetableData) {
      this.timetableName = timetableData.name;
      this.timetable = timetableData.schedule;
    } else {
      // If no timetable found, initialize empty timetable
      this.days.forEach(day => {
        this.timetable[day] = [];
      });
    }
  }

  addTimeSlot(day: string) {
    const slotId = Date.now().toString();
    this.timetable[day].push({ id: slotId, startTime: '', endTime: '', subject: '' });
  }

  removeTimeSlot(day: string, slotId: string) {
    this.timetable[day] = this.timetable[day].filter(slot => slot.id !== slotId);
  }

  saveTimetable() {
    const updatedTimetable = {
      id: this.timetableId,
      name: this.timetableName,
      schedule: this.timetable
    };
    this.timetableService.updateTimetable(updatedTimetable);
    this.router.navigate(['/home']);
  }
}
