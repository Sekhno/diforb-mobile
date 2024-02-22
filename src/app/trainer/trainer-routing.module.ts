import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TrainerComponent} from "./trainer/trainer.component";

const routes: Routes = [
  {
    path: ':id',
    component: TrainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TrainerRoutingModule {}
