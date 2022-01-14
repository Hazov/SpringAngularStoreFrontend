import { Component } from '@angular/core';
import {CartService} from './cart/cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'voronaFront';
  entered = false;

  constructor() { }

  ngOnInit(): void {

  }

  leave(){
    localStorage.setItem("name", "")
    localStorage.setItem("token", "")
    this.entered = false;
  }

}
