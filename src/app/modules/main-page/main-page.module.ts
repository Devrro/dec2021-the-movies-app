import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MoviesService} from "../../services/movies.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "../../main.interceptor";
import {GenreStorageService} from "../../services/genre-storage.service";
import {BarRatingModule} from "ngx-bar-rating";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HttpClientModule,
    BarRatingModule,

  ],
  providers: [
    GenreStorageService,
    MoviesService,

    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
  ]
})
export class MainPageModule {
}
