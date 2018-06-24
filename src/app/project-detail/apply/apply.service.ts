import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Apply } from './apply.model';
import { MYDEAS_API } from '../../app.api';

@Injectable()
export class ApplyService {

    constructor(private http: Http) {}

    checkApply(apply: Apply): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MYDEAS_API}/apply`, JSON.stringify(apply),
         new RequestOptions({headers: headers})).map(response => response.json()).map(apply => apply.id)
    }
}