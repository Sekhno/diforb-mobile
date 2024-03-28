import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {vocabulary} from "./examples";
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

  constructor() {
    super();
    this.unitLevel = '4';
  }
}
