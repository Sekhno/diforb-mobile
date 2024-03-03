import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursePageComponent} from "./course.page/course.page.component";
import {BeginnersCourseRoutingModule} from "./beginners-course-routing.module";
import {IonicModule} from "@ionic/angular";
import {Unit1Component} from "./units/unit1/unit1.component";
import {RouterLink} from "@angular/router";
import {WordsWriterComponent} from "../../components/words-writer/words-writer.component";
import {FormsModule} from "@angular/forms";
import {WordsReorderComponent} from "../../components/words-reorder/words-reorder.component";
import {ImagesComparisonComponent} from "../../components/images-comparison/images-comparison.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatListModule} from "@angular/material/list";
import {DragDropModule} from "@angular/cdk/drag-drop";

const MaterialModules = [
  MatStepperModule,
  MatListModule,
  DragDropModule
]

@NgModule({
  declarations: [

    CoursePageComponent,
    Unit1Component,
    WordsWriterComponent,
    WordsReorderComponent,
    ImagesComparisonComponent
  ],
  imports: [
    ...MaterialModules,
    CommonModule,
    BeginnersCourseRoutingModule,
    IonicModule,
    RouterLink,
    FormsModule
  ]
})
export class BeginnersCourseModule { }
