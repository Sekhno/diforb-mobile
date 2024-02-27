import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CoursePageComponent} from "./course.page/course.page.component";

const routes = [
  {
    path: '',
    component: CoursePageComponent
  }
];

@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Courses_1Module { }
