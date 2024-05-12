import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDashBoardComponent } from './Commun/menu-dash-board/menu-dash-board.component';
import { ProductsComponent } from './Product/products/products.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UserComponent } from './Users/user/user.component';
import { CategoryComponent } from './Categories/category/category.component';
import { SubCategoryComponent } from './SubCategories/sub-category/sub-category.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDashBoardComponent,
    ProductsComponent,
    AddProductComponent,
    UserComponent,
    CategoryComponent,
    SubCategoryComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
