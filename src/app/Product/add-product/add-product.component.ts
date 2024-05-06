import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  postProductForm!: FormGroup;// Declare the FormGroup variable

  constructor(private productService: ProductServiceService, private fb: FormBuilder,
  private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postProductForm = this.fb.group({
      product_name: [null, [Validators.required]], // Form control for the product name with required validation
      description: [null, [Validators.required]], // Form control for the product description with required validation
      price: [null, [Validators.required]], // Form control for the product price with required validation
      image: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      categoryId: [null, [Validators.required]], // Form control for the product supplier with required validation
      souscategoryId:[null, [Validators.required]]
    });
  }

  postproduct(){
  console.log(this.postProductForm.value);
  this.productService.postProduct(this.postProductForm.value).subscribe((res)=>{
  console.log(res);
  this.router.navigateByUrl("");}
  )}

}
