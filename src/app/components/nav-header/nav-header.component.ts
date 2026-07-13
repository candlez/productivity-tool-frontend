import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-nav-header',
  imports: [RouterLink],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {

  constructor(private authService: AuthService, private snackBarService: SnackBarService) {

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  handleLogout(): void {
    this.authService.logout().subscribe({
      next: () => this.snackBarService.success("Logged out sucessfully."),
      error: () => this.snackBarService.defaultError()
    });
  }
}
