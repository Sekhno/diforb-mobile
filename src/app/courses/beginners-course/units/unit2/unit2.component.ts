import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {affirmative, negative, question, vocabulary} from "./examples";
import {setLevel} from "../../../../../providers/storage/storage";
import {RootUnit} from "../RootUnitClass";

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit2Component extends RootUnit {
  @ViewChild(IonModal) modal!: IonModal;

  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() {
    super();
    this.unitLevel = '2';
  }
}
