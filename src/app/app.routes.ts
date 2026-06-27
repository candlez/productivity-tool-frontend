import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';

export const routes: Routes = [
    { 
        path: "",
        component: AppShellComponent,
        children: [
            { path: "login", component: LoginPageComponent },
            { path: "home", component: HomePageComponent },
            { path: "", redirectTo: "/home", pathMatch: "full" }
        ] 
    },
    { path: "**", component: NotFoundPageComponent }
];
