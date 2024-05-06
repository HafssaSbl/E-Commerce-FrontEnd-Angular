import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  postCategoryForm!: FormGroup;
  showForm: boolean = false;



  categories:any=[];
  nom : String="";
  constructor(private categoryService: CategoryService,private fb: FormBuilder,
    private router : Router){}
  toggleForm() {
    this.showForm = !this.showForm;
  }
  ngOnInit(){
    
    this.postCategoryForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
    });

    this.getAllCategory();
  }
  
  getAllCategory() {
  
  this.categoryService.getAllCategory().subscribe((res) => {
  
  console.log(res);
  this.categories=res;
  
  })
  
  }

  postCategory(){
    console.log(this.postCategoryForm.value);
    this.categoryService.postCategory(this.postCategoryForm.value).subscribe((res)=>{
    console.log(res);
    this.router.navigateByUrl("/category");}
    )}
}
