import {Component, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {setLevel} from "../../../../../providers/storage/storage";
import {vocabulary} from "./examples";

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.scss'],
})
export class Unit3Component {
  @ViewChild(IonModal) modal!: IonModal;

  currentTeo = 1
  currentExc = 1;
  progress = 0;

  vocabulary = vocabulary;

  constructor() { }

  finish() {
    setLevel('level', '3').then(() => {
      console.log('Level set to 3.')
    })
  }
}
