import { ICategory } from 'src/app/modules/icategory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  private httpoption={};
  constructor(private httpclient: HttpClient) {
    this.httpoption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }
  getallcategory(): Observable<ICategory[]>{
    return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}/categories`);
  }
}
