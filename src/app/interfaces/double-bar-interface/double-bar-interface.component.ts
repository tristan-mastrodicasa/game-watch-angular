import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-double-bar-interface',
  templateUrl: './double-bar-interface.component.html'
})
export class DoubleBarInterfaceComponent {

  private mainPages: Array<string> = [
    "/app",
    "/app/events",
    "/app/notifications",
    "/app/more"
  ];

  mainPage: boolean = false;

  constructor(private location: Location, private router: Router) {

    // Subscribe to router events
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      (e: NavigationEnd) => {
        this.mainPage = this.mainPages.includes(e.url) ? false : true;
      }
    );

  }

  goBack() {
    this.location.back();
  }

}
