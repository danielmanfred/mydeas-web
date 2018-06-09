import {Component, OnInit} from "@angular/core"
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem-vindo a Plataforma Mydeas!'

  constructor() { 
  }

  ngOnInit() {
  }

}
