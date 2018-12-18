import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CustomHttpClientService } from '../../custom-http-client.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

  signUpForm = this.fb.group({
    username: [''],
    password: ['']
  });

  usernameError: string = '';
  passwordError: string = '';

  constructor(private fb: FormBuilder, private http: CustomHttpClientService) { }

  onSubmit() {

    this.http.sendData("sign-up", this.signUpForm.value, true)
      .subscribe((response) => {

        if (response.error.exists) {

          if ("username" in response.error.messages) this.usernameError = response.error.messages.username;
          if ("password" in response.error.messages) this.passwordError = response.error.messages.password;

        }

      });

  }

}
