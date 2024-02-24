import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";

@Component({
  selector: 'app-words-reorder',
  templateUrl: './words-reorder.component.html',
  styleUrls: ['./words-reorder.component.scss'],
})
export class WordsReorderComponent {
  @Input() words: string[] = ['is', 'This', 'grace', 'amazing'];
  @Input() rightOrder: string = 'This is amazing grace';

  @Output() _onComplete = new EventEmitter<boolean>()

  rightAnswer = false

  constructor() { }

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

      this.rightAnswer = sentence.trim() === this.rightOrder;

      if (this.rightAnswer) {
        this._onComplete.emit(true)
      }
    }, 300)
  }
}
