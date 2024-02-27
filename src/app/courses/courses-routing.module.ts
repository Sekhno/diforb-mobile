import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursesPageComponent} from "./courses.page/courses.page.component";

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'courses_1',
        loadChildren: () => import('./modules/courses_1/courses_1.module').then(m => m.Courses_1Module)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoursesRoutingModule {
  constructor() {
    console.log('CoursesRoutingModule loaded');
  }
}
