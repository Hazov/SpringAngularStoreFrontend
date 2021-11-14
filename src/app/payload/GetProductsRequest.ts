export class GetProductsRequest{
  category:string;
  currentPage:number;
  productsOnPage:number;


  constructor(category: string, currentPage: number, productsOnPage: number) {
    this.category = category;
    this.currentPage = currentPage;
    this.productsOnPage = productsOnPage;
  }
}
