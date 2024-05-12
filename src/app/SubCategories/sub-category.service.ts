import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const BASIC_URL=["http://localhost:8888"];


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  constructor(private http:HttpClient) { }

  postSubCategory(SubCategory: any): Observable<any> {
    return this.http.post(BASIC_URL + "/catalogs/api/v2/souscategories/create",SubCategory);
  }
  
  getAllSubCategory():Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v2/souscategories/");
  }
  getSubCategoryById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/catalogs/api/v2/souscategories/"+id);
  }
  
  updateSubCategoryt(id : number,SubCategory: any):Observable<any>{
    return this.http.put(BASIC_URL+"/catalogs/api/v2/souscategories/"+id,SubCategory);
  }
  deleteSubCategory(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/catalogs/api/v2/souscategories/"+id);
  }
}
