import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../category/category';
import {CategoryService} from '../../category/category.service';
import {NgForm} from '@angular/forms';
import {SortedProduct} from '../SortedProduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: Category[];
  products: SortedProduct[];
  productToDelete: SortedProduct;


  article: string;
  name: string;
  price: number;
  description: string;
  count: number;
  category: Category;

  file:File;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getCategories();
    //this.getProducts();

  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(data => {this.categories = data});
  }

  changeCategory(cat) {
    this.category = cat;
    document.getElementById("dropdownMenuButton").innerText = this.category.name;

  }

  onSubmit(form: NgForm) {
    // let newProduct: eeProduct = new eeProduct(this.article, this.name, this.description, this.price, this.category, this.count, null);
    // form.reset()
    // this.productService.createProduct(newProduct).subscribe(data => this.ngOnInit());
  }

  // private getProducts() {
  //   this.productService.getAllProducts().subscribe(data => {
  //     this.products = data
  //   });
  // }

  changeProductToRemove(prod) {
    this.productToDelete = prod;
    document.getElementById("dropDownProductMenuButton").innerText =
      this.productToDelete.name + "     " + this.productToDelete.price + " руб";

  }

  removeFromList(form: NgForm) {
    this.productService.removeProduct(this.productToDelete).subscribe(data => this.ngOnInit());
    form.reset();

  }

  fileBrowserHandler(event) {
    console.log("Файл пошел")
    let file = event.target.file;
    if(file.length > 0) {
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      console.log("Файл поfdшел")
    }
  }

  sendFile() {
    if(this.file){
      this.productService.sendProductsFile(this.file).subscribe(data=>console.log(data));
    }

  }

  refresh() {
    this.file = undefined;
  }
}
