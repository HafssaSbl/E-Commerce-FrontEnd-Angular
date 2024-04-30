import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-ecommerce';
  showCategories: boolean = false;
  
  toggleCategories() {
    this.showCategories = !this.showCategories;
  }
}
