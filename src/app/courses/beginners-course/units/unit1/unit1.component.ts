import {Component, OnInit, ViewChild} from '@angular/core';
import {images, rightAnswers, rightSentences, sentences, sentencesForTranslate} from "./examples";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss']
})
export class Unit1Component  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  currentExc = 1;
  progress = 0;

  sentences = sentences;
  rightAnswers = rightAnswers;
  rightSentences = rightSentences;
  sentencesForTranslate = sentencesForTranslate;
  images = images;

  constructor() { }

  ngOnInit() {
    console.log('Unit1Component ngOnInit() called.')
  }

}
