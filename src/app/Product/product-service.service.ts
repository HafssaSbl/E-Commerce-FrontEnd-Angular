import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL=["http://localhost:8888"];

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http:HttpClient) { }

  postProduct(Product: any): Observable<any> {
    return this.http.post(BASIC_URL + "/catalogs/api/v1/products/create",Product);
  }
  
  getAllProduct():Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v1/products/");
  }
  getProductById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v1/products/"+id);
  }
  getProductByName(product_name : number):Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v1/products/search/"+product_name);
  }
  updateProduct(id : number,Product: any):Observable<any>{
    return this.http.put(BASIC_URL+"/catalogs/api/v1/products/"+id,Product);
  }
  deleteProduct(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/catalogs/api/v1/products/"+id);
  }
}
