import {Component, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Category} from '../category';
import {ProductService} from '../../product/product.service';
import {ProductListComponent} from '../../product/product-list/product-list.component';
import {CategoryService} from '../category.service';
import {ProductPaginationComponent} from '../../product/product-pagination/product-pagination.component';
import {Observable, ReplaySubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CategoryListComponent implements OnInit {
  private _currentCategory:string;
  categories: Category[];

  constructor(private productList: ProductListComponent, private categoryService: CategoryService, private productService:ProductService) {
  }

  ngOnInit(): void {

    this.showAllCategories();

  }

  chooseCategory(cat?: string): void {
    this.productList.showAllProductsByCategory(1,cat);
    this.productList.showPages(cat)
    this.currentCategory = cat;
    this.productList.currentCategory = this.currentCategory;
  }

  showAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
    })
  }

  get currentCategory(): string {
    return this._currentCategory;
  }

  set currentCategory(value: string) {
    this._currentCategory = value;
  }
}
