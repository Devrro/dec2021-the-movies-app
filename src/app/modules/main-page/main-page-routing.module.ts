import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesPageComponent} from "../../layouts/movies-page/movies-page.component";
import {MovieInfoComponent} from "../../components/movie-info/movie-info.component";


const routes: Routes = [
  {
    path: '', component: MoviesPageComponent, children: [
      {path: ':id', component: MovieInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule,]
})
export class MainPageRoutingModule {
}
