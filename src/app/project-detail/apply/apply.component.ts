import { ApplyService } from './apply.service';
import { RadioOption } from './../../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Apply } from './apply.model';

@Component({
  selector: 'mt-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

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

  constructor(private applyService: ApplyService) { }

  ngOnInit() {
  }

  checkApply(apply: Apply) {
    this.applyService.checkApply(apply).subscribe((applyId: string) => {
      console.log(`Solicitação concluída: ${applyId}`)
    })
    console.log(apply)
  }

}
