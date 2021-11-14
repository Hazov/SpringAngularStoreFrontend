import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../user/credentials';
import {JwtResponse} from '../payload/JwtResponse';
import {NewUserRequest} from '../payload/NewUserRequest';
import {MessageResponse} from '../payload/MessageResponse';
import {ForgotPasswordRequest} from '../payload/ForgotPasswordRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorizeURL = 'http://localhost:8080/api/v1/auth/signin';
  private registrationURL = 'http://localhost:8080/api/v1/auth/signup';
  private forgotPasswordURL = 'http://localhost:8080/api/v1/auth/forgotPassword';

  constructor(private httpClient: HttpClient) {

  }

  public authorize(credentials: Credentials): Observable<JwtResponse> {

    return this.httpClient.post<JwtResponse>(`${this.authorizeURL}`, credentials);
  }

  public authanticate(newUser: NewUserRequest): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(`${this.registrationURL}`, newUser);
  }
  public forgotPassword(forgotPass: ForgotPasswordRequest):Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(`${this.forgotPasswordURL}`, forgotPass);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }
}
