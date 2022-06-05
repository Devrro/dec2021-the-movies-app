import { Component, OnInit } from '@angular/core';
import{faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  faStar = faUser
  constructor() { }

  ngOnInit(): void {
  }

}
