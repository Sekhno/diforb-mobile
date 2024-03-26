import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root.page',
  templateUrl: './root.page.component.html',
  styleUrls: ['./root.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootPageComponent {
}
