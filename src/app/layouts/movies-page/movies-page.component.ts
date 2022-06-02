import {Component, HostBinding, OnInit} from '@angular/core';
import {SwitcherControlService} from "../../services/switcher-control.service";

@Component({
  selector: 'app-movies-page',
  host: {class:'moviesPage_container'},
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor(
    private switcher:SwitcherControlService
  ) { }
  private isDark= false;

  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'theme-dark' :'theme-light';
  }

  ngOnInit(): void {
    this.switcher.switcherMode.subscribe((value) => {
      this.isDark = value
    })
  }

}
