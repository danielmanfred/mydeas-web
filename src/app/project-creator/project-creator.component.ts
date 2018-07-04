import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RadioOption } from './../shared/radio/radio-option.model';
import { ProjectCreatorService } from './project-creator.service';
import { Router } from '@angular/router';
import { Project } from '../projects/project/project.model';

@Component({
  selector: 'mt-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {

  projectForm: FormGroup

  category: RadioOption[] = [
      {
        label: 'Coorking',
        value: 'Coorking'
      },
      {
        label: 'Comunicação',
        value: 'Comunicação'
      },
      {
        label: 'Automóveis',
        value: 'Automóveis'
      },
      {
        label: 'Computação em núvem',
        value: 'Computação em núvem'
      }
    ]

  constructor(private projectCreatorService: ProjectCreatorService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      slug: this.formBuilder.control(''),
      logo: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      category: this.formBuilder.control('')
    })
  }

  checkProject(project: Project) {
    this.projectCreatorService.checkProject(project).subscribe((projectId: string) => {
      this.router.navigate(['/project-creator-summary'])
    })
    console.log(project)
  }

}
