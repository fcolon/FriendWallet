import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
// import { FacebookLoginHandler } from "./node_modules/nativescript-facebook-login/platforms/android/libs/facebook-release.aar";
// import { FacebookLoginHandler } from "./node_modules/nativescript-facebook-login";

import { ResultService } from "./components/result/result.service";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateComponent } from "./components/create/create.component";
import { ResultsComponent } from "./components/result/results/results.component";
import { ResultDetailComponent } from "./components/result/result-detail/result-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ResultsComponent,
        LoginComponent,
        CreateComponent,
        ResultDetailComponent
    ],
    providers: [
        ResultService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
