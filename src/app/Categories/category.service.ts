import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const BASIC_URL=["http://localhost:8888"];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  postCategory(Category: any): Observable<any> {
    return this.http.post(BASIC_URL + "/catalogs/api/v1/categories/create",Category);
  }
  
  getAllCategory():Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v1/categories/");
  }
  getCategoryById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v1/categories/"+id);
  }
  
  updateCategoryt(id : number,Category: any):Observable<any>{
    return this.http.put(BASIC_URL+"/catalogs/api/v1/categories/"+id,Category);
  }
  deleteCategory(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/catalogs/api/v1/categories/"+id);
  }
}
