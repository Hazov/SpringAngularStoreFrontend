import {Component, Injectable,OnInit} from '@angular/core';
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
  pagesNumbers: number[];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showAllProductsByCategory(1);
  }

  showSpecifiedPage(page: number) {
    let category = this.currentCategory
    this.showAllProductsByCategory(page, category);
    this.currentPage = page;
  }

    showAllProductsByCategory(page:number, category?:string){
      if(category === undefined) category = 'all';
    this.productService.getAllProductByCategory(page, category).subscribe(data => {
      this.products = data.products;
      this.pagesCount = data.pagesCount;
      this.updatePagesButtons();
    });
  }


   updatePagesButtons() {
      this.pagesNumbers = []
      for (let i = 0; i < this.pagesCount; i++) {
        this.pagesNumbers[i] = i;
      }
  }

  setTab(n: number): void{
    this.tabs = n;
  }
}
