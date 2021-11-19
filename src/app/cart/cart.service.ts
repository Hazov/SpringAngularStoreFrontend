import {Injectable} from '@angular/core';
import {SortedProduct} from '../product/SortedProduct';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable, Subject} from 'rxjs';
import {Cart} from './cart';
import {Product} from '../product/Product';

@Injectable({providedIn: 'root'})

export class CartService{
  private cartURL = 'http://localhost:8080/api/v1/cart'


  constructor(private httpClient: HttpClient) {
  }


  addProductToCart(product: Product){
      this.httpClient.put(`${this.cartURL + '/add'}`, product).subscribe();
  }

  getProductsFromCart():Observable<Cart>{
    return this.httpClient.get<Cart>(`${this.cartURL}`);
  }

  deleteProductFromCart(product: Product) :Observable<Cart> {
     return this.httpClient.put<Cart>(`${this.cartURL + '/delete'}`, product);
  }

  decrementFromCart(product: Product) {
    return this.httpClient.put<Cart>(`${this.cartURL + '/dec'}`, product);
  }

  incrementFromCart(product: Product) {
    return this.httpClient.put<Cart>(`${this.cartURL + '/inc'}`, product);
  }

}

