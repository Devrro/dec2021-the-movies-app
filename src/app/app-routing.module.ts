import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from "./components/user-info/user-info.component";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {
    path: 'movies',
    loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
