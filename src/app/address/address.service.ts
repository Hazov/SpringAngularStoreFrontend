import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NewAddressStr} from '../payload/NewAddressStr';

@Injectable({providedIn: 'root'})

export class AddressService {
  private addressesURL = 'http://localhost:8080/api/v1/addresses';

  constructor(private httpClient: HttpClient) {
  }

  getAddresses(){
    return this.httpClient.get<string[]>(`${this.addressesURL + '/user-addresses'}`)
  }


  addAddress(address: string) {
    console.log("Gjxtve")
    return this.httpClient.put<string[]>(`${this.addressesURL + '/add'}`, new NewAddressStr(address));
  }
}
