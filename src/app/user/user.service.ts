import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService{
  usersURL = "http://localhost:8080/api/v1/users/";


  constructor(private httpClient: HttpClient) {
  }

  getUserName():Observable<string>{
    return this.httpClient.get<string>(`${this.usersURL + 'username'}`);
  }


}
