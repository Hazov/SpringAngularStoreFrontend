import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductViewComponent} from './product/product-view/product-view.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {AuthComponent} from './auth/auth.component';
import {TokenInterceptor} from './auth/TokenInterceptor';
import {JwtErrorInterceptor} from './auth/JwtErrorInterceptor';
import {ProductPaginationComponent} from './product/product-pagination/product-pagination.component';
import {OrderComponent} from './order/order.component';
import {OrderCompleteComponent} from './order/order-complete/order-complete.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';




const appRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'editProduct', component: CreateProductComponent},
  {path: 'cart', component: CartListComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order/complete', component: OrderCompleteComponent},
  {path: 'order/list', component: OrderListComponent},
  {path: 'remind', component: ForgotPassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductViewComponent,
    CategoryListComponent,
    CreateProductComponent,
    CartListComponent,
    AuthComponent,
    ProductPaginationComponent,
    OrderComponent,
    OrderCompleteComponent,
    OrderListComponent,
    ForgotPassComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: {HTTP_INTERCEPTORS},
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
