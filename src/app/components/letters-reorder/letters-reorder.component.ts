import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";
import {randomLetters} from "../../../utils/random";

@Component({
  selector: 'app-letters-reorder',
  templateUrl: './letters-reorder.component.html',
  styleUrls: ['./letters-reorder.component.scss'],
})
export class LettersReorderComponent implements OnChanges {
  private readonly _cdr = inject(ChangeDetectorRef);

  @Input() words: {singular: string[], plurals: string[]} = {singular: [], plurals: []};
  @Input() imageUrl = ''

  @Output() _onComplete = new EventEmitter<boolean>();

  currentExample = 0;
  examples: string[][] = [];

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();

    if (ev.target) {
      setTimeout(() => {
        const nodes = (ev.target as HTMLElement).children;
        const reduce = Array.prototype.reduce;
        const result = reduce.call(nodes,(acc: any, item: HTMLElement) => acc + item.innerText, '') as string;

        console.log(result.toLocaleLowerCase() === this.words.plurals[this.currentExample].toLocaleLowerCase());
        if (result.toLocaleLowerCase() === this.words.plurals[this.currentExample].toLocaleLowerCase()) {
          this.currentExample++;
          this._cdr.markForCheck();
        }

        if (this.currentExample === this.words.plurals.length) {
          this._onComplete.emit(true);
        }
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['words'].currentValue !== changes['words'].previousValue) {
      this.examples = this.words.plurals.map(word => randomLetters(word));
    }
  }

}
