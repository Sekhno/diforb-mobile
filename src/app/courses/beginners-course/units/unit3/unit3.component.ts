import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {vocabulary, affirmative, negative, question} from "./examples";
import {RootUnit} from "../RootUnitClass";

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit3Component extends RootUnit {
  @ViewChild(IonModal) modal!: IonModal;

  readonly vocabulary = vocabulary;
  readonly affirmative = affirmative;
  readonly negative = negative;
  readonly question = question;

  constructor() {
    super();
    this.unitLevel = '3';
  }
}
