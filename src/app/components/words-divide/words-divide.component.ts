import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-words-divide',
  templateUrl: './words-divide.component.html',
  styleUrls: ['./words-divide.component.scss'],
})
export class WordsDivideComponent {
  @Input() words = ['finger', 'person', 'bag', 'desk'];
  categories: {label: string, data: string[]}[] = [{label: '-s', data: []}, {label: '-es', data: []}, {label: '-ies', data: []}];


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

    this.check();
  }

  check() {
    console.log(this.categories);
  }

}
