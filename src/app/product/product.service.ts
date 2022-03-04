import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SortedProduct} from './SortedProduct';
import {GetProductsRequest} from '../payload/GetProductsRequest';
import {ProductsPageResponse} from '../payload/ProductsPageResponse';
import {MessageResponse} from '../payload/MessageResponse';
import {Product} from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {
  }

  getAllProductByCategory(currentPage, currentCategory): Observable<ProductsPageResponse>{
    let itemCountOnPage = Number(localStorage.getItem(`itemCountOnPage`));
    let productRequest = new GetProductsRequest(currentCategory, currentPage, itemCountOnPage);
    return this.httpClient.post<ProductsPageResponse>(this.productURL, productRequest);
  }

  createProduct(product: SortedProduct){
    return this.httpClient.post(this.productURL + '/create', product);
  }

  removeProduct(product: SortedProduct) {
    return this.httpClient.post<MessageResponse>(this.productURL + '/remove', product);
  }

  sendProductsFile(file : File):Observable<MessageResponse> {
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<MessageResponse>(this.productURL + '/create-from-csv', formData);

  }

  searchProducts(term: string) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.productURL + '/searchProducts/?' + 'term=' + term}`);
  }

}

