import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {affirmative, negative, vocabulary, question} from "./examples";
import {RootUnit} from "../RootUnitClass";

@Component({
  selector: 'app-unit4',
  templateUrl: './unit4.component.html',
  styleUrls: ['./unit4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Unit4Component  extends RootUnit {
  @ViewChild(IonModal) modal!: IonModal;

  vocabulary = vocabulary;
  affirmative = affirmative;
  negative = negative;
  question = question;

  constructor() {
    super();
    this.unitLevel = '4';
  }
}
