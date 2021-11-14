import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartService} from '../Cart/cart.service';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersURL = 'http://localhost:8080/api/v1/order/';
  private addressesURL = 'http://localhost:8080/api/v1/addresses/user-addresses';

  constructor(private cartService:CartService, private httpClient: HttpClient) {
  }

  getProductsFromCart(){
    return this.cartService.getProductsFromCart();
  }
  getAddresses(){
    return this.httpClient.get<string[]>(`${this.addressesURL}`).subscribe(data=>{
      console.log(data)
    })
  }



}

