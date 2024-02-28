import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'beginners',
    loadChildren: () => import('./beginners-course/beginners-course.module').then(m => m.BeginnersCourseModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoursesRoutingModule {}
