import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from "@angular/material/button";


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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  submitForm(): void {
    console.log(this.form.value.username, this.form.value.password);
  }
}
