import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import {SortedProduct} from '../../product/SortedProduct';
import {CartService} from '../cart.service';
import {Cart} from '../cart';
import {Product} from '../../product/Product';




@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: SortedProduct[];
  cart: Cart;
  totalPrice:number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.refreshCart();

  }

  deleteFromCart(sortedProduct: SortedProduct) {
    let product = new Product(sortedProduct);
      this.cartService.deleteProductFromCart(product).subscribe(cart => {
        this.products = cart.sortedProducts;
        this.totalPrice = cart.totalPrice;
      });
  }

  decrementProduct(sortedProduct: SortedProduct) {
    if(sortedProduct.countSelected === 1) return;
    let product = new Product(sortedProduct);
      this.cartService.decrementFromCart(product).subscribe(cart => {
        this.products = cart.sortedProducts;
        this.totalPrice = cart.totalPrice;
      });
  }

  incrementProduct(sortedProduct: SortedProduct) {
    if(sortedProduct.countSelected > sortedProduct.countInStock-1) return;
    let product = new Product(sortedProduct);
    this.cartService.incrementFromCart(product).subscribe(cart=>{
      this.products = cart.sortedProducts;
      this.totalPrice = cart.totalPrice;
    });
  }
  refreshCart(){
    this.cartService.getProductsFromCart().subscribe(cart => {
      this.products = cart.sortedProducts;
      this.totalPrice = cart.totalPrice;
    });
  }

}
