import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclases',
  templateUrl: './ngclases.component.html'
})
export class NgclasesComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alert: string = 'alert-danger';

  propiedades: Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

}
