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
        value: '5b2c2910b7da5b127c0c28f4'
      },
      {
        label: 'Comunicação',
        value: '5b2c2925b7da5b127c0c28f5'
      },
      {
        label: 'Automóveis',
        value: '5b2c2930b7da5b127c0c28f6'
      },
      {
        label: 'Computação em núvem',
        value: '5b2c293fb7da5b127c0c28f7'
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
