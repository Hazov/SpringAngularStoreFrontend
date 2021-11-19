import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SortedProduct} from './SortedProduct';
import {GetProductsRequest} from '../payload/GetProductsRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {
  }


  getAllProductByCategory(currentPage, currentCategory): Observable<SortedProduct[]>{
    if(currentCategory === undefined) currentCategory = 'all';
    let productRequest = new GetProductsRequest(
      currentCategory, currentPage, Number(localStorage.getItem(`itemCountOnPage`))
    )
    return this.httpClient.post<SortedProduct[]>(this.productURL, productRequest);
  }

  createProduct(product: SortedProduct){
    return this.httpClient.post(`${this.productURL + '/create'}`, product);
  }

  removeProduct(product: SortedProduct) {
     return this.httpClient.request('post', `${this.productURL + '/remove'}`, {body: product});
  }

  getCountOfProducts(category?:string) {
    if(category === undefined) category = 'all'
    return this.httpClient.get<number>(`${this.productURL + '/count/' + category}`)
  }

  getPages(data: number): number {
    let pagesCount = 0;
    let itemOnPage = Number(localStorage.getItem(`itemCountOnPage`));
    if(itemOnPage > 0){
      if(data >= itemOnPage)
        pagesCount = data / itemOnPage;
      pagesCount = Math.floor(pagesCount);
      let remainder = data % itemOnPage;
      if(remainder > 0)
        pagesCount+=1;
    }
    return pagesCount;
  }
}

