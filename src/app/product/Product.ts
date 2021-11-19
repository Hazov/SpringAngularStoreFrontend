import {Category} from '../category/category';
import {Feedback} from '../feedback/feedback';
import {SortedProduct} from './SortedProduct';


export class Product {
  id: number
  article: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  count: number;
  feedbacks: Feedback[];

  constructor(sp: SortedProduct) {
    this.id = sp.id;
    this.article = sp.article;
    this.name = sp.name;
    this.description = sp.description;
    this.price = sp.price;
    this.category = sp.category;
    this.count = sp.countSelected;
    this.feedbacks = sp.feedbacks;
  }
}
