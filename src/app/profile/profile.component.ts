import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './../security/login/login.service';
import { User } from './../security/login/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = this.loginService

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    let headers = new HttpHeaders()
    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    }
  }

}
