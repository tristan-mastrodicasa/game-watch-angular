import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-minimal-back-interface',
  templateUrl: './minimal-back-interface.component.html'
})
export class MinimalBackInterfaceComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
