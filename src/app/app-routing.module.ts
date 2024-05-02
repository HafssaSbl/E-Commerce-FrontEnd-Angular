import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDashBoardComponent } from './Commun/menu-dash-board/menu-dash-board.component';
import { ProductsComponent } from './Product/products/products.component';

const routes: Routes = [
  { path: '', component: MenuDashBoardComponent, children: [
    { path: 'product', component: ProductsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
