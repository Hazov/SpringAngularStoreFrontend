import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {ProductService} from '../product.service';
import {strict} from 'assert';
import {newArray} from '@angular/compiler/src/util';
import {BehaviorSubject, ReplaySubject, Subscription} from 'rxjs';
import {CategoryListComponent} from '../../category/category-list/category-list.component';
import {ProductListComponent} from '../product-list/product-list.component';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable({
  providedIn: 'root'
})
export class ProductPaginationComponent implements OnInit {
  @Input() pages: number[];

  @ViewChild("pageNumb", {static: false})
  pageNumb: ElementRef | undefined;

  constructor(private productService: ProductService, private productListComponent: ProductListComponent) {
  }

  ngOnInit(): void {
    localStorage.setItem(`itemCountOnPage`, '3')
  }

  showNextPage(offset: number) {
    this.productListComponent.showNextPage(offset)

  }


}
