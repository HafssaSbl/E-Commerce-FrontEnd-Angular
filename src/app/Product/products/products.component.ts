import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }


  products:any=[];
  nom : String="";
  constructor(private productService: ProductServiceService) { }
  
  ngOnInit(){
  
  this.getALlProducts();
  }
  
  getALlProducts() {
  
  this.productService.getAllProduct().subscribe((res) => {
  
  console.log(res);
  this.products=res;
  
  })
  
  }
  deleteProduct(id: number) {
  
  this.productService.deleteProduct(id).subscribe((res) => {
  console.log(res);
  this.getALlProducts();
  })
  }
}
