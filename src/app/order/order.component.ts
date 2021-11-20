import {Component, OnInit} from '@angular/core';
import {SortedProduct} from '../product/SortedProduct';
import {OrderService} from './order.service';
import {AddressService} from '../address/address.service';
import {NgForm} from '@angular/forms';
import {CartService} from '../cart/cart.service';
import {CreateOrderRequest} from '../payload/CreateOrderRequest';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products: SortedProduct[];
  totalPrice: number;
  addresses: string[];
  visibilityCurrentAddressField: boolean;
  currentAddress: any;
  visibleCreateAddressForm: boolean;
  addressStr: string;
  phoneNumber: string;

  constructor(private orderService: OrderService, private addressService: AddressService, private cartService:CartService) {
    this.visibleCreateAddressForm = false;
  }

  ngOnInit(): void {
    this.getProductsFromCart();
    this.getAddresses();
  }

  getProductsFromCart() {
    this.cartService.getProductsFromCart().subscribe(cart => {
      this.products = cart.sortedProducts;
      this.totalPrice = cart.totalPrice;
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
      this.chooseAddress(address);
    });

  }

  createOrder(createOrderForm: NgForm) {
    this.orderService.createNewOrder(new CreateOrderRequest(this.phoneNumber, this.currentAddress));
    this.currentAddress = undefined
    createOrderForm.resetForm();
  }

  showCurrentAddress():string {
    if(this.currentAddress === undefined)
      return "Укажите адрес"
    return this.currentAddress;
  }
}
