import { ProjectService } from './projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';

@Component({
  selector: 'mt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[]

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects()
                       .subscribe(projects => this.projects = projects)
  }

}
