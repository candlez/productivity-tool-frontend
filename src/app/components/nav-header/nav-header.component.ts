import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-header',
  imports: [RouterLink],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {

  constructor(private authService: AuthService) {

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
