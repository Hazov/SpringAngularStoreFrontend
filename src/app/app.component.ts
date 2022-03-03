import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'voronaFront';
  entered = false;
  admin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.admin = true;
    //this.isAdmin();
  }

  leave(){
    localStorage.setItem("name", "")
    localStorage.setItem("token", "")
    this.entered = false;
  }

  isAdmin() {
    this.authService.isAdmin().subscribe(data => {
      this.admin = data.valueOf();
      console.log("isAdmin: ");
      console.log(this.admin);
      return this.admin;
    });

  }
}
