import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'movies',pathMatch:'full'},
  {path:'movies', loadChildren:()=>import('./modules/main-page/main-page.module').then(m => m.MainPageModule)},
  {path:':id/details', loadChildren:()=>import('./modules/movie-details/movie-details.module').then(m => m.MovieDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
