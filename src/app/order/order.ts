import {Product} from '../product/product';

export class Order{
  owner: string;
  phoneNumber: string;
  address:string;
  items:Product[];
  amount:number;

  constructor(owner: string, phoneNumber: string, address: string, items: Product[], amount: number) {
    this.owner = owner;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.items = items;
    this.amount = amount;
  }
}


