import { Component } from '@angular/core';
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  imports: [NavHeaderComponent, RouterOutlet],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {

}
