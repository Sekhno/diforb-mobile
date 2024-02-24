import {Component, OnInit} from '@angular/core';
import {TrainerProgressService} from "../../services/trainer-progress.service";

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent  implements OnInit {


  constructor(
    private trainerProgressService: TrainerProgressService
  ) { }

  ngOnInit() {
    console.log('TrainerComponent');
  }

  onComplete() {
    this.trainerProgressService.addProgress(1, true);
  }

  selectChange(e: any) {
    console.log(e);
  }

}
