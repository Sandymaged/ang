import { IProduct } from './../modules/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsAPIService {

  private httpoption={};
  constructor(private httpclient: HttpClient) {
    this.httpoption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }
  getallproducts(): Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products`);
  }
  getallproductsid(): Observable<Number[]>{
    return this.httpclient.get<Number[]>(`${environment.APIBaseURL}/products.id`);
  }
  getallproductbycatid(catid:number): Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products?cateogryid=${catid}`);
  }
  getallproductbyid(proid:number): Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.APIBaseURL}/products?id=${proid}`);
  }
  addproduct(newproduct:IProduct): Observable<IProduct>{
    return this.httpclient.post<IProduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newproduct),this.httpoption);
  }
  updateProduct(newPrd: IProduct): Observable<IProduct> {
    return this.httpclient.put<IProduct>(
      `${environment.APIBaseURL}/products/${newPrd.id}`,
      JSON.stringify(newPrd),
      this.httpoption
    );
  }

  deleteProduct(prdID: number): Observable<{}> {
    const url = `${environment.APIBaseURL}/Product/${prdID}`;
    return this.httpclient.delete(
      `${environment.APIBaseURL}/Product/${prdID}`,
      this.httpoption
    );
  }
 /* getarray(): Observable<number[]>{
    let x=this.getallproducts();
    return this.httpclient.get<number[]>(`${environment.APIBaseURL}/products[id]`);
  }*/
}
