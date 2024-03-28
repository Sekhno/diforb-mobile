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
import {RootUnit} from "../RootUnitClass";

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit1Component extends RootUnit {
  @ViewChild(IonModal) modal!: IonModal;

  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() {
    super();
    this.unitLevel = '1';
  }
}
