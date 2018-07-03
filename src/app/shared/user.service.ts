import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { MYDEAS_API } from '../app.api';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  checkUser(user: User): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MYDEAS_API}/users`, JSON.stringify(user),
     new RequestOptions({headers: headers})).map(response => response.json()).map(user => user.id)
  }
}
