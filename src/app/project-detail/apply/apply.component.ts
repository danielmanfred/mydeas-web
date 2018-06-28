import { ApplyService } from './apply.service';
import { RadioOption } from './../../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Apply } from './apply.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'mt-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  applyForm: FormGroup

  // Formação acadêmica
  academicOptions: RadioOption[] = [
    {
      label: 'Tecnologia da Infomarção',
      value: 'IT'
    },
    {
      label: 'Administração',
      value: 'AD'
    },
    {
      label: 'Design',
      value: 'DE'
    },
    {
      label: 'Não tenho formação',
      value: 'NO'
    }
  ]

  constructor(private applyService: ApplyService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.applyForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      answer1: this.formBuilder.control(''),
      answer2: this.formBuilder.control(''),
      academic: this.formBuilder.control('')
    })
  }

  checkApply(apply: Apply) {
    this.applyService.checkApply(apply).subscribe((applyId: string) => {
      this.router.navigate(['/apply-summary'])
      console.log('Testing 2140')
    })
    console.log(apply)
  }

}
