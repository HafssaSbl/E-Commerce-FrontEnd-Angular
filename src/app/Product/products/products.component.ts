import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  postProductForm!: FormGroup;
  updateProductForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  showForm: boolean = false;
  // Déclarez les formulaires FormGroup
  editProductForm!: FormGroup;

  // Variable pour contrôler la visibilité du formulaire de modification
  showEditProductForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm;
    /*this.router.navigate(['/product/add']);*/
  }
  products:any=[];
  nom : String="";
  
  constructor(private productService: ProductServiceService,private activatedRoute: ActivatedRoute,private fb: FormBuilder,
    private router : Router) { this.editProductForm = new FormGroup({
      product_name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl(''),
      categoryId: new FormControl(''),
      souscategoryId: new FormControl(''),
      // Ajoutez d'autres champs ici
    });}
    showEditForm(product:any) {
      this.id = product.id; // Assurez-vous de définir l'identifiant du produit correctement ici
  this.showEditProductForm = true;
  // Préremplissez le formulaire avec les détails du produit sélectionné
  this.editProductForm.patchValue({
    product_name: product.product_name,
    description: product.description,
    price: product.price,
    image: product.image,
    categoryId: product.categoryId,
    souscategoryId: product.souscategoryId
  });
    }
  
  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; // Récupérez l'ID dans ngOnInit
      this.getProductById();
      // Vous pouvez également exécuter d'autres actions dépendant de l'ID ici
    });

    this.id = this.activatedRoute.snapshot.params["id"]; // Récupérez l'identifiant du produit ici, après que la route soit activée
    this.editProductForm = this.fb.group({
      product_name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]], // Form control for the product price with required validation
      image: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      categoryId: [null, [Validators.required]], // Form control for the product supplier with required validation
      souscategoryId:[null, [Validators.required]],
    });
    this.postProductForm = this.fb.group({
      product_name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      image: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
      souscategoryId: [null, [Validators.required]]
    });

    this.updateProductForm = this.fb.group({
      product_name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      image: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
      souscategoryId: [null, [Validators.required]]
    });

  this.getProductById();
  this.getALlProducts();
  }
 

  getALlProducts() {
    this.productService.getAllProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  deleteProduct(id: number) {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
    if (isConfirmed) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product: any) => product.id !== id);
        // Vous pouvez recharger uniquement les données au lieu de recharger toute la page
        // this.getALlProducts();
      }, error => {
        console.error("Erreur lors de la suppression du produit :", error);
      });
    }
  }

  postproduct() {
    console.log(this.postProductForm.value);
    this.productService.postProduct(this.postProductForm.value).subscribe((res) => {
      console.log(res);

      this.router.navigateByUrl("/product");
    });
this.editProductForm.reset();
  }

  updateProduct() {
    // Assurez-vous que this.id est correctement défini
    this.productService.updateProduct(this.id, this.editProductForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.router.navigateByUrl("/product");
      }
    });
    // Réinitialisez le formulaire et masquez le formulaire d'édition après la mise à jour
    this.editProductForm.reset();
    this.showEditProductForm = false;
  } 
  getProductById() {
    this.productService.getProductById(this.id).subscribe((res) => {
      console.log(res);
      this.updateProductForm.patchValue({
        product_name: res.product_name,
        description: res.description,
        price: res.price,
        image: res.image,
        categoryId: res.categoryId,
        souscategoryId: res.souscategoryId
      });
    });
  }

  
}