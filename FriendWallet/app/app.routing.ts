import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateComponent } from "./components/create/create.component";
import { ResultsComponent } from "./components/result/results/results.component";
import { ResultDetailComponent } from "./components/result/result-detail/result-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "create", component: CreateComponent },
    { path: "results", component: ResultsComponent },
    { path: "home", component: HomeComponent },
    { path: "result/:id", component: ResultDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
