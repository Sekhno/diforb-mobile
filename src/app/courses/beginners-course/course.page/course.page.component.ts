import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {checkLevel} from "../../../../providers/storage/storage";

@Component({
  selector: 'app-course.page',
  templateUrl: './course.page.component.html',
  styleUrls: ['./course.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent  implements OnInit {

  progress = 0;

  constructor() { }

  async ngOnInit() {
    this.progress = JSON.parse(await checkLevel('level') || '0');

    console.log('this.progress', this.progress)
  }

}
