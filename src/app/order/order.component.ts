import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product';
import {OrderService} from './order.service';
import {AddressService} from '../address/address.service';
import {NgForm} from '@angular/forms';

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
  phoneNumber: string;

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

  addAddress(address: string, createAddressForm: NgForm) {
    createAddressForm.resetForm();
    this.hideAddAddressForm();
    this.addressService.addAddress(address).subscribe(data => {
      this.addresses = data;
    });
  }

  onSubmit(createOrderForm: NgForm) {

    createOrderForm.resetForm();
  }

  showCurrentAddress():string {
    if(this.currentAddress === undefined)
      return "Укажите адрес"
    return this.currentAddress;
  }
}
