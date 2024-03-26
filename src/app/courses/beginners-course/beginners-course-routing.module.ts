import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./course.page/course.page.component";
import {Unit1Component} from "./units/unit1/unit1.component";
import {Unit2Component} from "./units/unit2/unit2.component";
import {Unit3Component} from "./units/unit3/unit3.component";
import {Unit4Component} from "./units/unit4/unit4.component";

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent,
  },
  {
    path: 'unit1',
    component: Unit1Component
  },
  {
    path: 'unit2',
    component: Unit2Component
  },
  {
    path: 'unit3',
    component: Unit3Component
  },
  {
    path: 'unit4',
    component: Unit4Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BeginnersCourseRoutingModule {}
