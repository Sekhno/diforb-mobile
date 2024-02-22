import { Component, OnInit } from '@angular/core';
import {TrainerProgressService} from "../../services/trainer-progress.service";
import {ItemReorderEventDetail} from "@ionic/angular";

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent  implements OnInit {

  constructor(
    private trainerProgressService: TrainerProgressService
  ) { }

  ngOnInit() {}

  onComplete() {
    this.trainerProgressService.addProgress(1, true);
  }


}
