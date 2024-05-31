import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTimetablePageRoutingModule } from './edit-timetable-routing.module';

import { EditTimetablePage } from './edit-timetable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTimetablePageRoutingModule
  ],
  declarations: [EditTimetablePage]
})
export class EditTimetablePageModule {}
