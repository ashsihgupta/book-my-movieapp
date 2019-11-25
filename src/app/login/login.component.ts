import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {BookMyMovieService} from '../book-my-movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

   invalidCredentialMsg: string;
    loginForm: FormGroup;
    constructor(private service: BookMyMovieService, private router: Router, private formbuilder: FormBuilder) {
        this.loginForm = this.formbuilder.group({
            username: [],
            password: []
        });
    }
    onFormSubmit() {
        const uname = this.loginForm.get('username').value;
        const pwd = this.loginForm.get('password').value;
        this.service.isUserAuthenticated(uname, pwd).subscribe(
            authenticated => {
                if (authenticated) {
                    this.router.navigate(['/books']);
                } else {
                    this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
                }
            }
        );
    }

}