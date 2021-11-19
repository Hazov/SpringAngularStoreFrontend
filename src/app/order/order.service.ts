import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartService} from '../cart/cart.service';
import {Order} from './order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersURL = 'http://localhost:8080/api/v1/order/';


  constructor(private httpClient: HttpClient) {
  }


  createNewOrder(order:Order) {

  }
}

