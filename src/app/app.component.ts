import {Component} from '@angular/core';
import {UserService} from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title: string;

  username: string;

  constructor(private userService: UserService) {
    this.title = 'voronaFront';
  }

  ngOnInit(): void {
      this.getUsername();
  }

  private getUsername() {
    this.userService.getUserName().subscribe(name=>{
      this.username = name;
    })
  }
}
