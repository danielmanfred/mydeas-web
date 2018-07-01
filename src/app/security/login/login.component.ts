import { User } from './user.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  private user: User = new User()

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
  }

  login() {
    console.log(this.user)
    //this.loginService.login(this.user)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
                     .subscribe(user => console.log(user))
  }

}