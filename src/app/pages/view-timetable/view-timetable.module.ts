import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTimetablePageRoutingModule } from './view-timetable-routing.module';

import { ViewTimetablePage } from './view-timetable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTimetablePageRoutingModule
  ],
  declarations: [ViewTimetablePage]
})
export class ViewTimetablePageModule {}
