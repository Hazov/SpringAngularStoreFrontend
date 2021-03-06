import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateOrderRequest} from '../payload/CreateOrderRequest';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  responseOK: boolean;


  private ordersURL = 'http://localhost:8080/api/v1/order';




  constructor(private httpClient: HttpClient) {

  }


  createNewOrder(orderRequest:CreateOrderRequest) {
      this.httpClient.post<boolean>(`${this.ordersURL + '/create'}`, orderRequest).subscribe(resp =>{
            this.responseOK = resp;
      });

  }
}

