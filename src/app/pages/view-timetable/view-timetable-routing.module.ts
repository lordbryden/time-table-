import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTimetablePage } from './view-timetable.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTimetablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTimetablePageRoutingModule {}
