import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  checkResponse() {
    let responseOK = this.orderService.responseOK;
    console.log(responseOK);
    return responseOK;
  }
}
