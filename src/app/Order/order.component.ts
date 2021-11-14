import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Product} from '../product/product';
import {OrderService} from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items: Product[];
  addresses: string[];
  visibilityCurrentAddressField: boolean;
  visibilityCreateAddressButton: boolean;
  b: boolean;

  constructor(private orderService: OrderService) {
    this.visibilityCurrentAddressField = false;
    this.visibilityCreateAddressButton = true;
  }

  ngOnInit(): void {
    this.getProductsFromCart();
    this.getAddresses();
    this.addresses = new Array(0);
  }

  getProductsFromCart(){
    this.orderService.getProductsFromCart().subscribe(data=>{
      this.items = data.products;
    });
  }
  getAddresses(){
    this.orderService.getAddresses()
  }

  chooseAddress(name) {

  }

  addAddress() {
    this.visibilityCurrentAddressField = true;
    this.visibilityCreateAddressButton = false;
  }

  checkInvisibilityAddressField():boolean{
    return !this.visibilityCurrentAddressField;

  }

  checkInvisibilityButtonCreate() {
    return !this.visibilityCreateAddressButton;
  }


  checkActionAndAddressExist() {
    if (this.addresses === undefined) {
      console.log("1")
      return false;
    }
    if (this.addresses.length <= 0) {
      if (!this.checkInvisibilityAddressField()) {
        console.log("2")
        return false;
      }
    }
    console.log(3)
    return true;
  }

  delActionCreate() {
    this.b = false;
  }
}
