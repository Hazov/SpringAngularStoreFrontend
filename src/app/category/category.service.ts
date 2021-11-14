import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesURL = 'http://localhost:8080/api/v1/categories'

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.categoriesURL}`);
  }


}

