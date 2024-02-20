import { Component } from '@angular/core';
import {PageOneComponent} from "./components/pages/page-one/page-one.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  component = PageOneComponent as any;

}
