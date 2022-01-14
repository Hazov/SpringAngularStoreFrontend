import { Component, OnInit } from '@angular/core';
import {Order} from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Order[]

  constructor() { }

  ngOnInit(): void {
  }

}
