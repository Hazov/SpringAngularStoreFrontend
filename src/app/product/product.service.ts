import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SortedProduct} from './SortedProduct';
import {GetProductsRequest} from '../payload/GetProductsRequest';
import {ProductsPageResponse} from '../payload/ProductsPageResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {
  }


  getAllProductByCategory(currentPage, currentCategory): Observable<ProductsPageResponse>{
    //TODO проверка уровнем выше
    if(currentCategory === undefined) currentCategory = 'all';
    let productRequest = new GetProductsRequest(
      currentCategory, currentPage, Number(localStorage.getItem(`itemCountOnPage`))
    )
    return this.httpClient.post<ProductsPageResponse>(this.productURL, productRequest);
  }

  createProduct(product: SortedProduct){
    return this.httpClient.post(`${this.productURL + '/create'}`, product);
  }

  removeProduct(product: SortedProduct) {
     return this.httpClient.request('post', `${this.productURL + '/remove'}`, {body: product});
  }

}

