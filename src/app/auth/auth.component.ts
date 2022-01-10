import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

import {Credentials} from '../user/credentials';
import {SignUpRequest} from '../payload/SignUpRequest';
import {ForgotPasswordRequest} from '../payload/ForgotPasswordRequest';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
//authorization
  username: string;
  password: string;

  //registration
  regUsername: string;
  regPassword: string;
  regPasswordConfirm: string;
  regEmail: string;

  //forgot password
  fpEmail: string;

  constructor(private authService: AuthService) {
    this.myForm = new FormGroup({
      "regUsername": new FormControl("", [Validators.required, Validators.pattern("")]), // TODO ПИШЕМ REGEX
      "regPassword": new FormControl("", [Validators.required, Validators.pattern("")]),
      "regEmail": new FormControl("", [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  authorize(username: string, password: string): void {
    let credentials = new Credentials(username, password);
    this.authService.authorize(credentials).subscribe(data => {
      localStorage.setItem('name', data.username);
      localStorage.setItem('token', data.token);
      console.log('ИМЯ' + data.username);
      console.log('Я ПОЛУЧИЛ ТОКЕН: ' + data.token);
      document.getElementById('lg_username').innerText = '';
      document.getElementById('lg_password').innerText = '';
    });
  }

  authenticate(): void {
    if (this.regEmail === undefined && this.regPassword === undefined && this.regUsername === undefined) return;
    if (this.regPassword != this.regPasswordConfirm) return;
    let newUser = new SignUpRequest(this.regUsername, this.regPassword, this.regEmail);
    this.authService.authanticate(newUser).subscribe(data => {
      console.log(data.message);
    });
    this.regEmail = undefined;
    this.regPassword = undefined;
    this.regUsername = undefined;
  }

  forgotPassword(fpEmail: string) {
    this.authService.forgotPassword(new ForgotPasswordRequest(fpEmail)).subscribe(data => {
      console.log(data.message);
    })
  }


  myForm: FormGroup;

  submit() {
    console.log(this.myForm);
  }

}



