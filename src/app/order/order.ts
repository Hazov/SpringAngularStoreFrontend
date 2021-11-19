import {SortedProduct} from '../product/SortedProduct';

export class Order{
  phoneNumber: string;
  address:string;
  items:SortedProduct[];
  amount:number;

  constructor(phoneNumber: string, address: string, items: SortedProduct[], amount: number) {
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.items = items;
    this.amount = amount;
  }
}


