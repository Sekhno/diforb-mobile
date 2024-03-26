import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";
import {randomWords} from "../../../utils/random";
import {ExampleType} from "src/models/types";

@Component({
  selector: 'app-words-reorder',
  templateUrl: './words-reorder.component.html',
  styleUrls: ['./words-reorder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsReorderComponent implements OnChanges {
  private readonly _cdr = inject(ChangeDetectorRef);

  @Input() examples: ExampleType[] = [];
  @Input() mood: 'landscape' | 'portrait' | 'square' = 'square';

  @Output() _onComplete = new EventEmitter<boolean>();

  words: string[][] = [];
  currentExc = 0;

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

      console.log(sentence.trim(), this.examples[this.currentExc].sentence)
      console.log(sentence.trim() === this.examples[this.currentExc].sentence)
      if (sentence.trim() === this.examples[this.currentExc].sentence) {
        this.currentExc++;
        if (this.currentExc === this.examples.length) {
          this._onComplete.emit(true);
        }
        this._cdr.markForCheck();
      }
    }, 500)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.words = this.examples.map(exc => randomWords(exc.sentence));
  }
}
