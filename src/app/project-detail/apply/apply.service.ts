import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Apply } from './apply.model';
import { MYDEAS_API } from '../../app.api';
import { Project } from '../../projects/project/project.model';
import { ProjectService } from '../../projects/projects.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ApplyService {

    constructor(private http: Http) {}

    checkApply(apply: Apply, id): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        console.log('id: ' + id.id)
        return this.http.post(`${MYDEAS_API}/projects/${id}`, JSON.stringify(apply),
         new RequestOptions({headers: headers})).map(response => response.json()).map(apply => apply.id)
    }
}