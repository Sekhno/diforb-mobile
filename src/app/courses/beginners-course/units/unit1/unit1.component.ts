import {Component, OnInit, ViewChild} from '@angular/core';
import {rightAnswers, rightSentences, sentences} from "./examples";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss']
})
export class Unit1Component  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  currentExc = 1;

  sentences = sentences;
  rightAnswers = rightAnswers;
  rightSentences = rightSentences;

  constructor() { }

  ngOnInit() {
    console.log('Unit1Component ngOnInit() called.')
  }

}
