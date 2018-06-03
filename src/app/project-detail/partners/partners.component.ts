import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects/projects.service';

@Component({
  selector: 'mt-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  partners: Observable<any>

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.partners = this.projectService.getPartners(this.route.parent.snapshot.params['id'])
  }

}
