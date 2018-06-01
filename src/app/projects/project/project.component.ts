import { Project } from './project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project

  constructor() { }

  ngOnInit() {
  }

}
