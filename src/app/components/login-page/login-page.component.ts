import { Component, } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel, MatError } from '@angular/material/input';
import { MatButton } from "@angular/material/button";
import { AuthService } from '../../services/auth.service';
import { User } from '../../data/domain/User';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton,
    MatError
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.form = this.formBuilder.nonNullable.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(): void {

    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.controls.username.value, this.form.controls.password.value).subscribe({
      next: (data: User) => {
        // this default redirect is subject to change (and probably will change)
        this.router.navigate(["/habits"]);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status !== 401) {
          this.snackBarService.defaultError();
          return;
        }

        this.form.setErrors({
          ...this.form.errors,
          invalidCredentials: true
        });

        this.form.controls.username.markAsTouched();
      }
    });
  }
}
