import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  disabled: boolean = false;
  agree: boolean = false;
  textAgreeColor: string = '#000';
  correctnessMarker: boolean = true;


  agreeInfo(): void {
    if (this.agree === false) {
      this.agree = true;
    } else {
      this.agree = false;
    };
  };

  submitInfo(anyEmail: any, anyPassword: any, confPassword: any): void {

    if (this.agree === true && (anyEmail.className, anyPassword.className, confPassword.className) === 'ng-dirty ng-valid ng-touched') {
      this.correctnessMarker = true;
      this.disabled = true;
      if (this.agree === true) {
        this.textAgreeColor = '#000';
      };    

    } else {
      if ((anyEmail.className, anyPassword.className, confPassword.className) !== 'ng-dirty ng-valid ng-touched') {
        this.correctnessMarker = false;
      };
      this.disabled = false;
      if (this.agree === false) {
        this.textAgreeColor = 'red';
      };
    };
  };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?!.*(.)\1)(?=.*[0-9])(?=.*[a-zA-Z])/)]),
    confirmPassword: new FormControl('', Validators.required),
  });

  get email() {
    return this.loginForm.get('email')
  };
  get password() {
    return this.loginForm.get('password')
  };
  get confirmPassword() {
    return this.loginForm.get('confirmPassword')
  };
}