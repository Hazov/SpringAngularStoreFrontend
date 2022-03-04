import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Product} from '../product/Product';
import {ProductService} from '../product/product.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items$: Observable<Product[]>;
  private searchHits = new Subject<String>();

  constructor(private productService:ProductService) { }

  public searchProducts(term:String){
    this.searchHits.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchHits.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.productService.searchProducts(term))
    );
    this.items$.subscribe((data)=>{
      console.log(data)
    })
  }

}
