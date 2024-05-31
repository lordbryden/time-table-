import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTimetablePage } from './edit-timetable.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimetablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTimetablePageRoutingModule {}
