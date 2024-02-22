import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrainerComponent} from "./trainer/trainer.component";
import {TrainerRoutingModule} from "./trainer-routing.module";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {WordsReorderComponent} from "./componetns/words-reorder/words-reorder.component";



@NgModule({
  declarations: [TrainerComponent, WordsReorderComponent],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    IonicModule,
    RouterLink
  ]
})
export class TrainerModule { }
