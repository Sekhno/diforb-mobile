import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RootRoutingModule} from "./root-routing.module";
import {RootPageComponent} from "./root.page/root.page.component";
import {IonicModule} from "@ionic/angular";
import {HomeComponent} from "./components/home/home.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [RootPageComponent, HomeComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    IonicModule,
    RouterLink
  ]
})
export class RootModule { }
