import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {checkLevel, LEVELS} from "../../../../providers/storage/storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  implements OnInit {

  progress = 0;

  constructor() { }

  ngOnInit() {
    checkLevel('level').then((value) => {
      if (!value) throw Error();

      this.progress = ((parseInt(value)) / LEVELS * 100);
    })
  }

}
