import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimetableService } from 'src/app/services/timetable.service';
// import { v4 as uuidv4 } from 'uu';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
  timetable: { [key: string]: any[] } = {};
  timetableName: string = '';
  timetableId: string | null = '';

  constructor(private timetableService: TimetableService, private router: Router,    private route: ActivatedRoute
  ) { }

 ngOnInit() {
    // Get the timetable ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.timetableId = params.get('id');

      if (this.timetableId && this.timetableId !== '0') {
        // Load the timetable from the service if the ID is not 0
        const timetableData = this.timetableService.getTimetableById(this.timetableId);
        if (timetableData) {
          console.log(timetableData)
          this.timetableName = timetableData.name;
          this.timetable = this.initializeTimetable(timetableData.schedule);
        } else {
          // Initialize an empty timetable if no data is found
          this.initializeEmptyTimetable();
        }
      } else {
        // Initialize an empty timetable if ID is 0
        this.initializeEmptyTimetable();
      }
    });
  }

  initializeTimetable(schedule: { [key: string]: any[] }) {
    const initializedTimetable: { [key: string]: any[] } = {};
    this.days.forEach(day => {
      initializedTimetable[day] = schedule[day] || [];
    });
    return initializedTimetable;
  }

  initializeEmptyTimetable() {
    this.days.forEach(day => {
      this.timetable[day] = [];
    });
  }

  addTimeSlot(day: string) {
    const slotId = Date.now().toString();
    this.timetable[day].push({ id: slotId, startTime: '', endTime: '', subject: '' });
  }

  removeTimeSlot(day: string, slotId: string) {
    this.timetable[day] = this.timetable[day].filter(slot => slot.id !== slotId);
  }

  saveTimetable() {
    const uniqueId = this.timetableId === '0' ? Date.now().toString() : this.timetableId;
    const newTimetable = {
      id: uniqueId,
      name: this.timetableName,
      schedule: this.timetable,
    };
    if (this.timetableId === '0') {
      this.timetableService.addTimetable(newTimetable);
    } else {
      this.timetableService.updateTimetable(newTimetable);
    }
    this.router.navigate(['/home']);
  }
}
