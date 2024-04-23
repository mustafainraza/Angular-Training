import { Component } from '@angular/core';
import { environment } from '../../../app/environment';
import { Router } from '@angular/router';
import {CustomerService} from '../../../core/services/customer.service'
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,this.passwordValidator])
  });

  user:any={
    email: '',
    password: ''
  }


  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.user = this.authService.getUser();
    }
  }

  users:any
  constructor(private authService: LoginService,private router:Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(result => {
        if (result) {
          alert('Login successful!');
          this.router.navigate(['/customers'])
        } else {
          alert('Invalid credentials!');
        }
      });
    }
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!password) {
      return null; // Don't validate an empty value; let required validator handle that
    }

    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasNumber || !hasMinLength) {
      return { passwordStrength: 'Password must be at least 6 characters long and include at least one number' };
    }

    return null; // Return null if there are no errors
  }

  logout()
  {
    this.user={}
    this.authService.logout()
  }

  alreadyLoggedIn()
  {
   return this.authService.isLoggedIn()
  }

  
}
