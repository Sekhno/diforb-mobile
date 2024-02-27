import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RootPageComponent} from "./root.page/root.page.component";
import {HomeComponent} from "./components/home/home.component";
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RootRoutingModule {}
