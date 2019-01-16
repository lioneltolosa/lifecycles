import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclases',
  templateUrl: './ngclases.component.html'
})
export class NgclasesComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alert: string = 'alert-danger';

  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;

  propiedades: Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout ( () => this.loading = false, 3000 );
  }

}
