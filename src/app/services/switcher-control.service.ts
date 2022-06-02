import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SwitcherControlService {

  switcherMode = new BehaviorSubject<boolean>(false)
  constructor() { }
}
