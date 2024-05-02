import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-dash-board',
  templateUrl: './menu-dash-board.component.html',
  styleUrls: ['./menu-dash-board.component.css']
})
export class MenuDashBoardComponent {

  showProducts: boolean = false;
  showUsers: boolean = false;
  showOrders: boolean = false;
  showCategories: boolean = false;

  constructor() { }

  toggleProducts() {
    this.showProducts = !this.showProducts;
    this.resetOtherMenus('products');
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
    this.resetOtherMenus('users');
  }

  toggleOrders() {
    this.showOrders = !this.showOrders;
    this.resetOtherMenus('orders');
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
    this.resetOtherMenus('categories');
  }

  resetOtherMenus(menu: string) {
    if (menu !== 'products') {
      this.showProducts = false;
    }
    if (menu !== 'users') {
      this.showUsers = false;
    }
    if (menu !== 'orders') {
      this.showOrders = false;
    }
    if (menu !== 'categories') {
      this.showCategories = false;
    }
  }
}
