import { IUser } from './../modules/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  private httpoption={};
  constructor(private httpclient: HttpClient) {
    this.httpoption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }
  adduser(newuser:IUser): Observable<IUser>{
    return this.httpclient.post<IUser>(`${environment.APIBaseURL}/users`,JSON.stringify(newuser),this.httpoption);
  }
}
