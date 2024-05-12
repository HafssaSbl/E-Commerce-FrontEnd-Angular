import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDashBoardComponent } from './Commun/menu-dash-board/menu-dash-board.component';
import { ProductsComponent } from './Product/products/products.component';
import { CategoryComponent } from './Categories/category/category.component';
import { AddProductComponent } from './Product/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: MenuDashBoardComponent, children: [
    { path: 'product', component: ProductsComponent },
    { path: 'product/:id', component: ProductsComponent },
    { path: 'product/add', component: AddProductComponent },
    { path: 'category', component: CategoryComponent }

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
