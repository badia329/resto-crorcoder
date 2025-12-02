import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 superVariable!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.superVariable = this.formBuilder.group({
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
    console.log('here is user', this.superVariable.value);
  }

  
}
