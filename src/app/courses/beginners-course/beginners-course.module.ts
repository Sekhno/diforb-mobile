import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursePageComponent} from "./course.page/course.page.component";
import {BeginnersCourseRoutingModule} from "./beginners-course-routing.module";
import {IonicModule} from "@ionic/angular";
import {Unit1Component} from "./units/unit1/unit1.component";



@NgModule({
  declarations: [CoursePageComponent, Unit1Component],
  imports: [
    CommonModule,
    BeginnersCourseRoutingModule,
    IonicModule
  ]
})
export class BeginnersCourseModule { }
