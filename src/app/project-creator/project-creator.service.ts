import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { MYDEAS_API } from '../app.api';
import { Project } from '../projects/project/project.model';

@Injectable()
export class ProjectCreatorService {

    constructor(private http: Http) {}

    checkProject(project: Project): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MYDEAS_API}/projects`, JSON.stringify(project),
         new RequestOptions({headers: headers})).map(response => response.json()).map(project => project.id)
    }
}