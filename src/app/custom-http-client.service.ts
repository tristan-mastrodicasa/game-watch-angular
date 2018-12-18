import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {

  requestServer: string = "http://localhost:80/";

  constructor(private http: HttpClient, private router: Router, private location: Location) { }

  sendData(handler: string, data: object, showLoadingScreen: boolean): any {

    if (showLoadingScreen) this.router.navigate(['/loading']);

    let request = this.http.post<any>(this.requestServer + handler, data) // Might need to add the headers parameter

    // Manage the display
    // Deal with meta information
    request.subscribe((response: any) => {

        // Complete jobs with meta
        if (showLoadingScreen) this.location.back();

      }, error => {

        console.log(error); // ?

      });

      return request;

  }

}
