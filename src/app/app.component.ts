import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {

  }
}
