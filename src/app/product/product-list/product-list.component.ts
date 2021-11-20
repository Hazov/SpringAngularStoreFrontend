import {Component, Injectable,OnInit} from '@angular/core';
import {SortedProduct} from '../SortedProduct';
import {ProductService} from '../product.service';
import {Category} from '../../category/category';


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
  products: SortedProduct[];
  tabs: number;
  pagesNumbers: number[];
  currentCategory: string;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showAllProductsByCategory(1);
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
    let category = this.currentCategory
    this.productService.getAllProductByCategory(page, category).subscribe(data =>{
      console.log(data)
  this.products = data
    })


  }
}
