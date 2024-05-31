import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'timetable/:id',
    loadChildren: () => import('./pages/timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'view-timetable/:id',
    loadChildren: () => import('./pages/view-timetable/view-timetable.module').then( m => m.ViewTimetablePageModule)
  },
  {
    path: 'edit-timetable/:id',
    loadChildren: () => import('./pages/edit-timetable/edit-timetable.module').then( m => m.EditTimetablePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
