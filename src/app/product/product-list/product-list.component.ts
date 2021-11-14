import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Category} from '../../category/category';
import {CategoryService} from '../../category/category.service';
import {map, tap} from 'rxjs/operators';
import {ProductPaginationComponent} from '../product-pagination/product-pagination.component';
import {CategoryListComponent} from '../../category/category-list/category-list.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ProductListComponent implements OnInit {
  categories: Category[];
  products: Product[];
  tabs: number;
  pagesNumbers: number[];
  currentCategory: string;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

    showAllProductsByCategory(page:number, category?:string){
    this.productService.getAllProductByCategory(page, category).subscribe(data => {
      this.products = data;
    });
  }


  setTab(n: number): void{
    this.tabs = n;
  }


   showPages(category) {
    this.productService.getCountOfProducts(category).subscribe(data=>{
      let pagesCount = this.productService.getPages(data);
      this.pagesNumbers = []
      for (let i = 0; i < pagesCount; i++) {
        this.pagesNumbers[i] = i;
      }
    })

  }

  showNextPage(page: number) {
    let prod;
    let category = this.currentCategory
    this.productService.getAllProductByCategory(page, category).subscribe(data =>{
      console.log(data)
  this.products = data
    })


  }
}
