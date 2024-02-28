import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursePageComponent} from "./course.page/course.page.component";
import {BeginnersCourseRoutingModule} from "./beginners-course-routing.module";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    BeginnersCourseRoutingModule,
    IonicModule
  ]
})
export class BeginnersCourseModule { }
