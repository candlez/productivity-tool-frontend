import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from "@angular/material/button";
import { AuthService } from '../../services/auth.service';
import { User } from '../../data/domain/User';


@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    MatLabel,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  submitForm(): void {
    this.authService.login(this.form.value.username, this.form.value.password).subscribe({
      next: (data: User) => console.log(data),
      error: (err: any) => console.error(err)
    });
  }
}
