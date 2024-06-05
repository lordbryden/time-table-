import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../services/timetable.service';
import { Router } from '@angular/router';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  timetables: any[] = [];

  timetable: any = {};
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  timetableName : any;
  constructor(private timetableService: TimetableService ,private router: Router) {}


  ngOnInit() {
    this.timetables = this.timetableService.getTimetables();
    console.log(this.timetables)
  }
  viewTimetable(id: string) {
    this.router.navigate(['/view-timetable', id]);
  }

  editTimetable(id: string) {
    this.router.navigate(['/timetable', id]);
  }
  // async initializeApp() {

  //   this.scheduleNotifications();
  // }
  ionViewDidEnter(){
      this.scheduleNotifications();
  }

   generateUniqueId(): number {
    const timestamp = Date.now(); // Get current timestamp
    const random = Math.floor(Math.random() * 90000) + 10000; // Generate a random number between 10000 and 99999
    return random;
   }
  async scheduleNotifications() {


    const dayOfWeek = new Date().getDay(); // Get current day of the week (0 = Sunday, 1 = Monday, etc.)
    const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = dayNames[dayOfWeek]

    this.timetables.forEach(async (timetableItem) => {
      const timetableId = parseInt(timetableItem.id, 10);
      const timetable = timetableItem.schedule;
      console.log(timetableId)
      console.log(today)
      const todaySchedule = timetable[today];
      console.log(todaySchedule)
      if (todaySchedule) {
        todaySchedule.forEach(async (event : any) => {
          const notificationTime = new Date(); // Use the current time as a base
          // Manually set the notification time to 3:53 PM
          const [hours, minutes] = event.startTime.split(':').map(Number);
              notificationTime.setHours(hours, minutes, 0);

             const id = this.generateUniqueId();
             console.log(id)

          await LocalNotifications.schedule({
            notifications: [
              {
                title: 'Class Reminder',
                body: `It's time for ${event.subject}`,
                id: id, // Use a unique notification ID combining timetable ID and event ID
                schedule: { at: notificationTime },
                sound: 'default', // Or specify a custom sound file
              },
            ],
          });
        });
      }
    });

  }
}
