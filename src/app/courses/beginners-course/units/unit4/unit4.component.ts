import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {vocabulary} from "./examples";

@Component({
  selector: 'app-unit4',
  templateUrl: './unit4.component.html',
  styleUrls: ['./unit4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit4Component {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;

  vocabulary = vocabulary;

  finish() {
    setLevel('level', '4').then(() => {
      console.log('Level set to 4.')
    })
  }

  delay(nextStep: number) {
    setTimeout(() => {
      this.currentExc = nextStep;
    }, 1000)
  }

}
