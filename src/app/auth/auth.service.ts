import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../user/credentials';
import {JwtResponse} from '../payload/JwtResponse';
import {NewUserRequest} from '../payload/NewUserRequest';
import {MessageResponse} from '../payload/MessageResponse';
import {ForgotPasswordRequest} from '../payload/ForgotPasswordRequest';
import {ForgotChangePasswordRequest} from '../payload/ForgotChangePasswordRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorizeURL = 'http://localhost:8080/api/v1/auth/signin';
  private registrationURL = 'http://localhost:8080/api/v1/auth/signup';
  private forgotPasswordURL = 'http://localhost:8080/api/v1/auth/forgotPassword';
  private forgotChangePasswordURL = 'http://localhost:8080/api/v1/remind/';



  constructor(private httpClient: HttpClient) {

  }

  public authorize(credentials: Credentials): Observable<JwtResponse> {

    console.log(credentials)
    return this.httpClient.post<JwtResponse>(`${this.authorizeURL}`, credentials);
  }

  public authenticate(newUser: NewUserRequest): Observable<MessageResponse> {
    console.log(newUser)
    return this.httpClient.post<MessageResponse>(`${this.registrationURL}`, newUser);
  }
  public forgotPassword(forgotPass: ForgotPasswordRequest):Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(`${this.forgotPasswordURL}`, forgotPass);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  // changePassword() {
  //   return this.httpClient.post<ChangePasswordResponse>(`${}`)
  // }
  public changePassword(forgotPassChangeRequest): Observable<MessageResponse> {
    return this.httpClient.post<MessageResponse>(`${this.forgotChangePasswordURL}`, forgotPassChangeRequest);
  }
}
