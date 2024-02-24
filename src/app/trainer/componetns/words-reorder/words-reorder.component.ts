import {Component, Input, OnInit} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";

@Component({
  selector: 'app-words-reorder',
  templateUrl: './words-reorder.component.html',
  styleUrls: ['./words-reorder.component.scss'],
})
export class WordsReorderComponent {
  @Input() words: string[] = ['is', 'This', 'grace', 'amazing'];
  @Input() rightOrder: string = 'This is amazing grace';

  rightAnswer = false

  constructor() { }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
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
      console.log('sentence', sentence)
    }, 400)
  }


}
