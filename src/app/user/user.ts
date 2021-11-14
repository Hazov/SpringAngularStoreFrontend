import {Product} from '../product/product';
import {Feedback} from '../feedback/feedback';
import {Cart} from '../Cart/cart';

export class User{
   private _name: string;
   private _avatar: string;
   private _cart: Cart;
   private _favourite: Product[];
   private _reviews: Feedback[];
   private _token?: string;

  get name(): string {
    return this._name;
  }
  get avatar(): string {
    return this._avatar;
  }
  get cart(): Cart {
    return this._cart;
  }
  get favourite(): Product[] {
    return this._favourite;
  }
  get reviews(): Feedback[] {
    return this._reviews;
  }
  get token(): string {
    return this._token;
  }

}
