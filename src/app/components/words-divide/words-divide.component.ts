import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {WordsDivideType} from "../../../models/types";

@Component({
  selector: 'app-words-divide',
  templateUrl: './words-divide.component.html',
  styleUrls: ['./words-divide.component.scss'],
})
export class WordsDivideComponent implements OnChanges {
  @Input() words: WordsDivideType = {words: [], categories: []};

  @Output() _onComplete = new EventEmitter<boolean>();

  categories: {label: string, data: string[]}[] = [];


  drop(event: CdkDragDrop<string[]>) {
    const item = event.item.element.nativeElement.innerText;
    const previousIndex = event.previousContainer.data.indexOf(item);
    const currentIndex = event.container.data.length;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        previousIndex,
        currentIndex
      );
    }

    console.log('check!');
    if (this.check()) {
      console.log('complete!');
      this._onComplete.emit(true);
    }
  }

  check() {
    const categories = this.words.categories;

    return this.categories.every((category, i) => {
      const {data} = category;
      const _data = categories[i].data;

      if (data.length !== _data.length) return false;

      return data.every(w => _data.includes(w));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.words.categories.length) {
      this.categories = this.words.categories.map((category, i) => {
        return {label: category.label, data: []};
      });
    }
  }

}
