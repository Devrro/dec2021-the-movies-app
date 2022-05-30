import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesPageComponent} from "../../layouts/movies-page/movies-page.component";


const routes: Routes = [
  {path:'', component:MoviesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
