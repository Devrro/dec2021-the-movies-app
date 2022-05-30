import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MoviesService} from "../../services/movies.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "../../main.interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor
  }, MoviesService]
})
export class MainPageModule {
}
