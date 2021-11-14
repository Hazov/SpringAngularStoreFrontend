import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

import {Credentials} from '../user/credentials';
import {NewUserRequest} from '../payload/NewUserRequest';
import {ForgotPasswordRequest} from '../payload/ForgotPasswordRequest';


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

  authanticate(regUsername: string, regPassword: string, regPasswordConfirm: string, regEmail: string): void {
    if (regPassword == regPasswordConfirm) {
      let newUser = new NewUserRequest(regUsername, regEmail, regPassword);
      this.authService.authanticate(newUser).subscribe(data => {

      });
    }
  }
  forgotPassword(fpEmail:string){
    this.authService.forgotPassword(new ForgotPasswordRequest(fpEmail)).subscribe(data => {
      console.log(data.message);
    })
  }

}
