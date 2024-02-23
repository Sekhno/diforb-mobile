import { NgModule } from '@angular/core';
import {TrainerComponent} from "./trainer/trainer.component";
import {TrainerRoutingModule} from "./trainer-routing.module";
import {IonicModule} from "@ionic/angular";
import {MatStepperModule} from '@angular/material/stepper';
import {RouterLink} from "@angular/router";
import {WordsReorderComponent} from "./componetns/words-reorder/words-reorder.component";
import {NgForOf, NgIf} from "@angular/common";




@NgModule({
  declarations: [TrainerComponent, WordsReorderComponent],
  imports: [
    TrainerRoutingModule,
    IonicModule,
    MatStepperModule,
    RouterLink,
    NgForOf,
    NgIf,

  ]
})
export class TrainerModule { }
