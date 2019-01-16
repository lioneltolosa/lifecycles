import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alert1: string = 'success';
  alert2: string = 'info';

  constructor() { }

  ngOnInit() {
  }

}
