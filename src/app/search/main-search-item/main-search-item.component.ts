import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product/Product';
import {ProductService} from '../../product/product.service';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-main-search-item',
  templateUrl: './main-search-item.component.html',
  styleUrls: ['./main-search-item.component.css']
})
export class MainSearchItemComponent implements OnInit {
@Input() product:Product;
@Input() numb:number;
@Output() prod: EventEmitter<Product>

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  buyProduct(product: Product) {
    this.cartService.addProductToCart(product);
    this.prod.emit()
  }


}
