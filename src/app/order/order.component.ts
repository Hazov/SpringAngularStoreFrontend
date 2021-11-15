import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product';
import {OrderService} from './order.service';
import {AddressService} from '../address/address.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items: Product[];
  addresses: string[];
  visibilityCurrentAddressField: boolean;
  currentAddress: any;
  visibleCreateAddressForm: boolean;
  addressStr: string;

  constructor(private orderService: OrderService, private addressService: AddressService) {
    this.visibleCreateAddressForm = false;
  }

  ngOnInit(): void {
    this.getProductsFromCart();
    this.getAddresses();
  }

  getProductsFromCart() {
    this.orderService.getProductsFromCart().subscribe(data => {
      this.items = data.products;
    });
  }

  getAddresses() {
    this.addressService.getAddresses().subscribe(data=>{
      this.addresses = data;
    });
  }

  chooseAddress(address) {
    this.currentAddress = address;
  }

  showAddAddressForm() {
    this.visibleCreateAddressForm = true;
  }
  hideAddAddressForm() {
    this.visibleCreateAddressForm = false;
  }

  addAddress(address: string) {
    this.hideAddAddressForm();
    this.addressService.addAddress(address).subscribe(data => {
      this.addresses = data;
    });
  }
}
