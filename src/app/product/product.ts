import {Category} from '../category/category';
import {Feedback} from '../feedback/feedback';

export class Product{

  id: number;
  article: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  countInStock: number;
  feedbacks: Feedback[];
  countSelected: number;
  summedPrice: number;

  constructor(article: string, name: string, description: string,
              price: number, category: Category, count: number, feedbacks: Feedback[]) {

    this.article = article;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.countInStock = count;
    this.feedbacks = feedbacks;
  }
}


