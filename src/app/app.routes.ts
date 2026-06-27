import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    { path: "login", component: LoginPageComponent },
    { path: "home", component: HomePageComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: NotFoundPageComponent }
];
