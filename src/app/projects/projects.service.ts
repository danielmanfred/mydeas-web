import { ErrorHandler } from './../app.error.handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { MYDEAS_API } from './../app.api';
import { Project } from "./project/project.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProjectService {
    constructor(private http: Http) {}
    
    getProjects(): Observable<Project[]> {
        return this.http.get(`${MYDEAS_API}/projects`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }
}