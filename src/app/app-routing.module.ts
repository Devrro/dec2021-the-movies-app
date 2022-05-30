import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'movies', loadChildren:()=>import('./modules/main-page/main-page.module').then(m => m.MainPageModule)},
  {path:':movieCode', loadChildren:()=>import('./modules/movie-details/movie-details.module').then(m => m.MovieDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
