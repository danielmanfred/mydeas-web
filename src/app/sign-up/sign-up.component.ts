import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RadioOption } from './../shared/radio/radio-option.model';
import { User } from './../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup

  gender: RadioOption[] = [
    {
      label: 'Feminino',
      value: 'F'
    },
    {
      label: 'Masculino',
      value: 'M'
    }
  ]

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      password: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      pic: this.formBuilder.control('')
    })
  }

  checkUser(user: User) {
    this.userService.checkUser(user).subscribe((userId: string) => {
      this.router.navigate(['/sign-up-summary'])
    })
    console.log(user)
  }

}
