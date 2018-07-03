import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../projects/projects.service';
import { Project } from '../projects/project/project.model';

@Component({
  selector: 'mt-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.getProjectById(this.route.snapshot.params['id'])
                       .subscribe(project => this.project = project)
  }

}

