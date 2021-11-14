import { Component } from '@angular/core';
import {CartService} from './Cart/cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'voronaFront';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

}
