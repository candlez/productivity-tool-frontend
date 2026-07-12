import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { HabitsPageComponent } from './components/habits-page/habits-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { 
        path: "",
        component: AppShellComponent,
        children: [
            { path: "login", component: LoginPageComponent },
            { path: "signup", component: SignupPageComponent },
            { path: "home", component: HomePageComponent },
            { path: "habits", component: HabitsPageComponent, canActivate: [authGuard] },
            { path: "", redirectTo: "/home", pathMatch: "full" }
        ] 
    },
    { path: "**", component: NotFoundPageComponent }
];
