import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  timetable: any;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  timetableName : any;
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {

    // this.scheduleNotifications();
  }


  async scheduleNotifications() {
    const dayOfWeek = new Date().getDay(); // Get current day of the week (0 = Sunday, 1 = Monday, etc.)
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const todaySchedule = this.timetable[dayNames[dayOfWeek]];

    if (todaySchedule) {
      todaySchedule.forEach(async (event :any) => {
        const [hours, minutes] = event.startTime.split(':').map(Number);
        const notificationTime = new Date();
        notificationTime.setHours(hours, minutes, 0);

        await LocalNotifications.schedule({
          notifications: [
            {
              title: 'Class Reminder',
              body: `It's time for ${event.subject}`,
              id: event.id,
              // schedule: { at: notificationTime },
              sound: 'default', // Or specify a custom sound file
            },
          ],
        });
      });
    }
  }
}
