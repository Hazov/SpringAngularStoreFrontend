import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartService} from '../cart/cart.service';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersURL = 'http://localhost:8080/api/v1/order/';


  constructor(private cartService:CartService, private httpClient: HttpClient) {
  }

  getProductsFromCart(){
    return this.cartService.getProductsFromCart();
  }

}

