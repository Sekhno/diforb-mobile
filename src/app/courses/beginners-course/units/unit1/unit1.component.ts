import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {
  affirmative,
  images, negative, question,
  rightAnswers,
  rightSentences,
  sentences,
  sentencesForTranslate,
  vocabulary
} from "./examples";
import {IonModal} from "@ionic/angular";
import {checkLevel, setLevel} from "src/providers/storage/storage";

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit1Component  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;


  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() { }

  ngOnInit() {
    console.log('Unit1Component ngOnInit() called.');
  }

  finish() {
    setLevel('level', '1').then(() => {
      console.log('Level set to 1.')
    })
  }

  delay(nextStep: number) {
    setTimeout(() => {
      this.currentExc = nextStep;
    }, 1000)
  }

}
