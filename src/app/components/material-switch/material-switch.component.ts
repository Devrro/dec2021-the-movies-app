import { Component, OnInit } from '@angular/core';
import {SwitcherControlService} from "../../services/switcher-control.service";

@Component({
  selector: 'app-material-switch',
  templateUrl: './material-switch.component.html',
  styleUrls: ['./material-switch.component.css']
})
export class MaterialSwitchComponent implements OnInit {



  constructor(
    private switchMode:SwitcherControlService
  ) { }

  ngOnInit(): void {
  }
  changeMode():void{
    this.switchMode.switcherMode.next(!this.switchMode.switcherMode.value)
  }


}
