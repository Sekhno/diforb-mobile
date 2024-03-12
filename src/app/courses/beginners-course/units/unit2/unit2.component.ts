import {Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {affirmative, negative, question, vocabulary} from "./examples";

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.scss'],
})
export class Unit2Component {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 4
  currentExc = 5;
  progress = 0;

  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() { }

}
