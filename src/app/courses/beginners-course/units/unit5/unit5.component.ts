import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {RootUnit} from "../RootUnitClass";
import {IonModal} from "@ionic/angular";
import {affirmative, negative, vocabulary, question, words, reorder_words} from "./examples";

@Component({
  selector: 'app-unit5',
  templateUrl: './unit5.component.html',
  styleUrls: ['./unit5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit5Component extends RootUnit {
  @ViewChild(IonModal) modal!: IonModal;

  words = words;
  reorder_words = reorder_words;
  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() {
    super();
    this.unitLevel = '5';
  }
}
