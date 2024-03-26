import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-images-comparison',
  templateUrl: './images-comparison.component.html',
  styleUrls: ['./images-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComparisonComponent  implements OnInit {

  @Output() _onComplete = new EventEmitter<boolean>()

  todo = ['angry', 'cold', 'hot', 'hungry', 'scared', 'thirsty'];
  done = [] as string[];

  private _rightAnswer = ['thirsty', 'cold','hungry','angry',  'hot',  'scared', ] as const;

  constructor() { }

  ngOnInit() {
    console.log('ImagesComparisonComponent: ngOnInit() called.')
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }


    if (this.done.join(',') === this._rightAnswer.join(',')) {
      this._onComplete.emit(true)
    }
  }

  load() {
    console.log('ImagesComparisonComponent: load() called.')
  }

}
