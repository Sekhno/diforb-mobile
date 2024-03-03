import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";
import {randomWords} from "../../../utils/random";

@Component({
  selector: 'app-words-reorder',
  templateUrl: './words-reorder.component.html',
  styleUrls: ['./words-reorder.component.scss'],
})
export class WordsReorderComponent implements OnChanges{
  @Input() sentences: string[] = [];
  @Input() rightAnswers: string[] = [];
  @Input() images: string[] = [];

  @Output() _onComplete = new EventEmitter<boolean>();

  words: string[][] = [];
  currentExc = 0;

  constructor() {}

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();

    setTimeout(() => {
      let sentence = '';
      const childNodes = (ev.target as HTMLElement).childNodes;

      for (let i = 0; i < childNodes.length; i++) {
        const word = (childNodes[i] as HTMLElement).innerText;

        if (word) {
          sentence += word + ' ';
        }
      }


      if (sentence.trim() === this.rightAnswers[this.currentExc]) {
        this.currentExc++;
        if (this.currentExc === this.sentences.length) {
          this._onComplete.emit(true);
        }
      }
    }, 500)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.words = this.sentences.map(sentence => randomWords(sentence));
  }
}
