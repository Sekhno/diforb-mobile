import { Component } from '@angular/core';
import {PageOneComponent} from "../tab1/components/pages/page-one/page-one.component";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  protected readonly component = PageOneComponent;
}
