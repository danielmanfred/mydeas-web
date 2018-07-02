import { Router } from '@angular/router';
import { MYDEAS_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

    private isAuth: boolean = false
    user: User

    constructor(private http: HttpClient, private router: Router) {}
    
    isLoggedIn(): boolean {
        return this.user = undefined
    }

    login(email: string, password: string): Observable<User> {
        let headers: any = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        return this.http.post<User>(`${MYDEAS_API}/users/authenticate`, { email: email, password: password })
                        .do(user => this.user = user)
    }
}
