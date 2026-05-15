import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ValidationService } from '../../../core/services/validation.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private validationService = inject(ValidationService);
  private route = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

getError(controlName: string): boolean {
  return this.validationService.hasError(
    this.loginForm,
    controlName,
  );
}
  onSignIn() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    if (
      this.loginForm.value.email === 'kero@gmail.com' &&
      this.loginForm.value.password === '1234'
    ) {
      this.route.navigateByUrl('/dashboard');

      return;
    }

    console.log('Password Error..!');
  }
}
