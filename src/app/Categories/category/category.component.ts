import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  updateCategoryForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  showForm: boolean = false;
  // Déclarez les formulaires FormGroup
  editCategoryForm!: FormGroup;

  // Variable pour contrôler la visibilité du formulaire de modification
  showEditCategoryForm: boolean = false;
  postCategoryForm!: FormGroup;



  categories:any=[];
  nom : String="";
  constructor(private categoryService: CategoryService,private activatedRoute: ActivatedRoute,private fb: FormBuilder,
    private router : Router) {
      this.editCategoryForm = new FormGroup({
      name: new FormControl(''),
     
    });}
    showEditForm(category:any) {
      this.id = category.id; // Assurez-vous de définir l'identifiant du produit correctement ici
  this.showEditCategoryForm = true;
  // Préremplissez le formulaire avec les détails du produit sélectionné
  this.editCategoryForm.patchValue({
    name: category.name,
   
  });
    }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; // Récupérez l'ID dans ngOnInit
      this.getCategoryById();
      // Vous pouvez également exécuter d'autres actions dépendant de l'ID ici
    });

    this.id = this.activatedRoute.snapshot.params["id"]; // Récupérez l'identifiant du produit ici, après que la route soit activée
    this.editCategoryForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
      
    });
    this.postCategoryForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
    });
    this.updateCategoryForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation

    });

  this.getCategoryById();

    this.getAllCategory();
  }
  
  getAllCategory() {
  
  this.categoryService.getAllCategory().subscribe((res) => {
  
  console.log(res);
  this.categories=res;
  
  })
  
  }

  

  deleteCategory(id: number) {
      const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ce Category ?");
      if (isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe(() => {
          this.categories = this.categories.filter((category: any) => category.id !== id);
          // Vous pouvez recharger uniquement les données au lieu de recharger toute la page
          // this.getALlProducts();
        }, error => {
          console.error("Erreur lors de la suppression du category :", error);
        });
      }
  }


  getCategoryById() {
    this.categoryService.getCategoryById(this.id).subscribe((res) => {
      console.log(res);
      this.updateCategoryForm.patchValue({
        name: res.name,
      });
    });
  }

  loadCategories() {
    this.categoryService.getAllCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }

  updateCategory() {
    // Assurez-vous que this.id est correctement défini
    this.categoryService.updateCategoryt(this.id, this.editCategoryForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.loadCategories(); 
        this.router.navigateByUrl("/category");
      }
    });
    // Réinitialisez le formulaire et masquez le formulaire d'édition après la mise à jour
    this.editCategoryForm.reset();
    this.showEditCategoryForm = false;
  }
  
  postCategory(){
    console.log(this.postCategoryForm.value);
    this.categoryService.postCategory(this.postCategoryForm.value).subscribe((res)=>{
    console.log(res);
    this.loadCategories(); 
        this.router.navigateByUrl("/category");
  }
    )}

}
