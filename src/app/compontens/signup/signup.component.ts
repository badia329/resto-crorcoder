import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  obj: any = {};
  signupForm!: FormGroup;
  errorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      confirmPassword: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
    });
  }

  signup() {
    console.log('Here is user', this.signupForm.value);
    let path = this.router.url;
    console.log('Here is path', path);
    if (path == '/signup') {
      this.signupForm.value.role = 'client';
    } else {
      this.signupForm.value.role = 'chef';
    }
    this.userService.signup(this.signupForm.value).subscribe((data) => {
      console.log('Here is response agter signup', data);
      if (data.isAdded) {
        this.router.navigate(['signin']);
      } else {
        this.errorMsg = 'Email Already Exists';
      }
    });
  }
}
// badiy@gmail.com