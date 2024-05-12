import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  postProductForm!: FormGroup;

  constructor(private productService: ProductServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.postProductForm = this.fb.group({
      product_name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      image: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
      souscategoryId: [null, [Validators.required]]
    });
  }

  postProduct() {
    console.log(this.postProductForm.value);
    this.productService.postProduct(this.postProductForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/product");
    });
  }

}
