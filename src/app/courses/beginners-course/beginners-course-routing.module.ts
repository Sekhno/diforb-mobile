import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./course.page/course.page.component";
import {Unit1Component} from "./units/unit1/unit1.component";

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent,
  },
  {
    path: 'unit1',
    component: Unit1Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BeginnersCourseRoutingModule {}
