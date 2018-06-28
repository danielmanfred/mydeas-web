import { Router } from '@angular/router';
import { MYDEAS_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class LoginService {

    private isAuth: boolean = false

    constructor(private http: HttpClient, private router: Router) {}
    //constructor(private router: Router) {}

    login(email: string, password: string): Observable<User> {
        let headers: any = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        return this.http.post<User>(`${MYDEAS_API}/users/authenticate`, { email: email, password: password })
        }});
    }
    
    /*login(user: User) {
        if (user.email === 'neymar@cbf.com' && user.password === 'ramyen') {
            this.isAuth = true
            this.router.navigate(['/'])
        } else {
            this.isAuth = false
        }
    }*/
}