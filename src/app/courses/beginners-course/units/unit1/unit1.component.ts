import {Component, OnInit, ViewChild} from '@angular/core';
import {
  affirmative,
  images,
  rightAnswers,
  rightSentences,
  sentences,
  sentencesForTranslate,
  vocabulary
} from "./examples";
import {IonModal} from "@ionic/angular";
import {checkLevel, setLevel} from "../../../../../providers/storage/storage";

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss']
})
export class Unit1Component  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;

  sentences = sentences;
  rightAnswers = rightAnswers;
  rightSentences = rightSentences;
  sentencesForTranslate = sentencesForTranslate;
  images = images;

  vocabulary = vocabulary;
  affirmative = affirmative;



  constructor() { }

  ngOnInit() {
    console.log('Unit1Component ngOnInit() called.');

    // setLevel('unit_1', '3').then(() => {
    //   console.log('Level set to 3.')
    // })

    checkLevel('unit_1').then(level => {
      console.log('Level is:', level);
    })
  }

}
