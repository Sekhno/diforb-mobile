import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {affirmative, negative, question, vocabulary} from "./examples";
import {setLevel} from "../../../../../providers/storage/storage";

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit2Component {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;

  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() { }

  finish() {
    setLevel('level', '2').then(() => {
      console.log('Level set to 2.')
    })
  }

}
