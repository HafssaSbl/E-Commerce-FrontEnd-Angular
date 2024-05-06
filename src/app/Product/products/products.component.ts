import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  postProductForm!: FormGroup;
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }


  products:any=[];
  nom : String="";
  constructor(private productService: ProductServiceService,private fb: FormBuilder,
    private router : Router) { }
  
  ngOnInit(){
    this.postProductForm = this.fb.group({
      product_name: [null, [Validators.required]], // Form control for the product name with required validation
      description: [null, [Validators.required]], // Form control for the product description with required validation
      price: [null, [Validators.required]], // Form control for the product price with required validation
      image: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      categoryId: [null, [Validators.required]], // Form control for the product supplier with required validation
      souscategoryId:[null, [Validators.required]]
    });
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
  postproduct(){
    console.log(this.postProductForm.value);
    this.productService.postProduct(this.postProductForm.value).subscribe((res)=>{
    console.log(res);
    this.router.navigateByUrl("/product");}
    )}
}
