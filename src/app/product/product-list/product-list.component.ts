import {Component, Injectable, OnInit} from '@angular/core';
import {SortedProduct} from '../SortedProduct';
import {ProductService} from '../product.service';
import {Category} from '../../category/category';
import {Product} from '../Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ProductListComponent implements OnInit {
  currentCategory: string;
  categories: Category[];
  products: Product[];
  tabs: number;
  currentPage: number;
  pagesCount: number;
  pagesButtons: any[];


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.showAllProductsByCategory(1);
    this.currentPage = 1;
  }

  showSpecifiedPage(page: any) {
    let category = this.currentCategory;
    if (page === '<') {
      page = this.currentPage - 1;
    }
    if (page === '>') {
      page = this.currentPage + 1;
    }
    this.showAllProductsByCategory(page, category);
    this.currentPage = page;
  }

  showAllProductsByCategory(page: number, category?: string) {
    if (category === undefined) {
      category = 'all';
    }
    this.productService.getAllProductByCategory(page, category).subscribe(data => {
      this.products = data.products;
      this.pagesCount = data.pagesCount;
      this.updatePagesButtons();
    });
  }


  updatePagesButtons() {
    this.pagesButtons = [];
    if (this.pagesCount > 0) {
      if (this.pagesCount < 5) {
        for (let i = 0; i < this.pagesCount; i++) {
          this.pagesButtons[i] = i;
        }
      } else {
        const LAST = this.pagesCount - 1;
        switch (this.currentPage) {
          case 1:
            this.pagesButtons = [1, 2, '>', LAST];break;
          case 2:
            this.pagesButtons = [1, this.currentPage, '>', LAST];break;
          case this.pagesCount - 1:
            this.pagesButtons = [1, '<', this.currentPage, LAST];break;
          default:
            this.pagesButtons = [1, '<', this.currentPage, '>', LAST];
        }
      }
    }
  }

  setTab(n: number): void {
    this.tabs = n;
  }
}
