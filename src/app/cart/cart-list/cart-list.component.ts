import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import {Product} from '../../product/product';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items: Product[];
  totalPrice:number;


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {  //TODO query backend! Порядок в корзине должен быть на бэкэнде.
    let map = new Map<number, Product>();         //Map<product.id, product>
    this.cartService.getProductsFromCart().subscribe(data => {
      data.products.forEach(prod => {
        if (!map.has(prod.id)) {
          prod.countSelected= 1;
        } else {
          let countSelected = map.get(prod.id).countSelected;
          prod.countSelected = ++countSelected
        }
        map.set(prod.id, prod);
      });
      this.items = new Array(map.size);
      let i = 0;
      this.totalPrice = 0;
      map.forEach((productValue, productIdKey) => {
        productValue.summedPrice = productValue.price*productValue.countSelected;
        this.items[i++] = productValue;
        this.totalPrice += productValue.summedPrice;
      })
    });
  }

  deleteFromCart(item: Product) {
      this.cartService.deleteProductFromCart(item).subscribe(cart => {
        this.ngOnInit()
      });
  }

  decrementProduct(item: Product) {
    if(item.countSelected<=0) item.countSelected=1
    if(item.countSelected>1) {
      this.cartService.decrementFromCart(item).subscribe(() => {
        this.ngOnInit()
      });
    }
  }

  incrementProduct(item: Product) {
    this.cartService.incrementFromCart(item).subscribe(()=>{
        this.ngOnInit()
    });
  }

}
