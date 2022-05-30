import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MoviesPageComponent } from './layouts/movies-page/movies-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    GenreBadgeComponent,
    UserInfoComponent,
    MoviesPageComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
