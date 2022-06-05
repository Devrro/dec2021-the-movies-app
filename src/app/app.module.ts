import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MoviesPageComponent } from './layouts/movies-page/movies-page.component';
import { MoviesOptionsComponent } from './components/movies-options/movies-options.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';
import { GenresComponent } from './components/genres/genres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CantFindComponent } from './components/cant-find/cant-find.component';
import { MaterialSwitchComponent } from './components/material-switch/material-switch.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import { BarRatingModule } from "ngx-bar-rating";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CarouselModule} from "primeng/carousel";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    MovieInfoComponent,
    UserInfoComponent,
    MoviesPageComponent,
    MoviesOptionsComponent,
    HorizontalScrollDirective,
    GenresComponent,
    CantFindComponent,
    MaterialSwitchComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatFormFieldModule,
        BarRatingModule,
        FontAwesomeModule,
        CarouselModule,


    ],
  providers: [
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
