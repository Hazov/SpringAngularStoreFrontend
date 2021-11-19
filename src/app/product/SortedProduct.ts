import {Category} from '../category/category';
import {Feedback} from '../feedback/feedback';

export class SortedProduct {

  private _id: number
  private _article: string;
  private _name: string;
  private _description: string;
  private _price: number;
  private _category: Category;
  private _countInStock: number;
  private _feedbacks: Feedback[];
  private _countSelected: number;
  private _amount: number;


  constructor(id: number, article: string, name: string, description: string, price: number, category: Category, countInStock: number,
              feedbacks: Feedback[], countSelected: number, amount: number) {
    this._id = id;
    this._article = article;
    this._name = name;
    this._description = description;
    this._price = price;
    this._category = category;
    this._countInStock = countInStock;
    this._feedbacks = feedbacks;
    this._countSelected = countSelected;
    this._amount = amount;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get article(): string {
    return this._article;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    return this._price;
  }

  get category(): Category {
    return this._category;
  }

  get countInStock(): number {
    return this._countInStock;
  }

  get feedbacks(): Feedback[] {
    return this._feedbacks;
  }

  get countSelected(): number {
    return this._countSelected;
  }

  get amount(): number {
    return this._amount;
  }

  set article(value: string) {
    this._article = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set price(value: number) {
    this._price = value;
  }

  set category(value: Category) {
    this._category = value;
  }

  set countInStock(value: number) {
    this._countInStock = value;
  }

  set feedbacks(value: Feedback[]) {
    this._feedbacks = value;
  }

  set countSelected(value: number) {
    this._countSelected = value;
  }

  set amount(value: number) {
    this._amount = value;
  }
}
