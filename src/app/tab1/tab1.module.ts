import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {PageOneComponent} from "./components/pages/page-one/page-one.component";
import {PageTwoComponent} from "./components/pages/page-two/page-two.component";
import {OneLessonComponent} from "./components/lessons/one-lesson/one-lesson.component";
import {TwoLessonComponent} from "./components/lessons/two-lesson/two-lesson.component";
import {ThreeLessonComponent} from "./components/lessons/three-lesson/three-lesson.component";
import {FourLessonComponent} from "./components/lessons/four-lesson/four-lesson.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule

  ],
  declarations: [
    Tab1Page,
    PageOneComponent,
    PageTwoComponent,
    OneLessonComponent,
    TwoLessonComponent,
    ThreeLessonComponent,
    FourLessonComponent
  ]
})
export class Tab1PageModule {}
