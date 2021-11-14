import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {CartService} from '../../Cart/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() prod: Product;
  @Input() count:number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


  buyProduct(prod: Product) {
   this.cartService.addProductToCart(prod);
  }
}
