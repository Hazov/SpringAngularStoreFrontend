import {Product} from '../product/Product';

export class ProductsPageResponse{
  private _products: Product[];
  private _pagesCount: number;


  get products(): Product[] {
    return this._products;
  }

  get pagesCount() {
    return this._pagesCount;
  }
}
