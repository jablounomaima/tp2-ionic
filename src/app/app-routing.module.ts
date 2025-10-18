// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/course-list', pathMatch: 'full' },
  {
    path: 'course-list',
    loadChildren: () => import('./courses/course-list/course-list.module').then(m => m.CourseListPageModule)
  },
  {
    path: 'course-detail/:id',
    loadChildren: () => import('./courses/course-detail/course-detail.module').then(m => m.CourseDetailPageModule)
  },
  {
    path: 'add-course',
    loadChildren: () => import('./courses/add-course/add-course.module').then(m => m.AddCoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}