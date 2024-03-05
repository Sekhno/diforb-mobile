import { Component, OnInit } from '@angular/core';
import {AudioProvider} from "../../../providers/audio/audio";
import {vocabulary} from "../../courses/beginners-course/units/unit1/examples";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent {
  vocabulary = vocabulary;
  currentExc = 0;

  constructor(
    private audioProvider: AudioProvider
  ) { }

  play(url: string) {
    this.audioProvider.play();
  }

}
