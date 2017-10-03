"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
// import { FacebookLoginHandler } from "./node_modules/nativescript-facebook-login/platforms/android/libs/facebook-release.aar";
// import { FacebookLoginHandler } from "./node_modules/nativescript-facebook-login";
const result_service_1 = require("./components/result/result.service");
const home_component_1 = require("./components/home/home.component");
const login_component_1 = require("./components/login/login.component");
const create_component_1 = require("./components/create/create.component");
const results_component_1 = require("./components/result/results/results.component");
const result_detail_component_1 = require("./components/result/result-detail/result-detail.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
let AppModule = 
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            results_component_1.ResultsComponent,
            login_component_1.LoginComponent,
            create_component_1.CreateComponent,
            result_detail_component_1.ResultDetailComponent
        ],
        providers: [
            result_service_1.ResultService,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkQ7QUFDM0Qsa0ZBQThFO0FBQzlFLCtDQUFpRDtBQUNqRCxtREFBK0M7QUFDL0MsaUlBQWlJO0FBQ2pJLHFGQUFxRjtBQUVyRix1RUFBbUU7QUFDbkUscUVBQWlFO0FBQ2pFLHdFQUFvRTtBQUNwRSwyRUFBdUU7QUFDdkUscUZBQWlGO0FBQ2pGLHVHQUFrRztBQUVsRywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUE0QnRFLElBQWEsU0FBUztBQUh0Qjs7RUFFRTtBQUNGO0NBQTBCLENBQUE7QUFBYixTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixvQ0FBZ0I7WUFDaEIsZ0NBQWM7WUFDZCxrQ0FBZTtZQUNmLCtDQUFxQjtTQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNQLDhCQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztJQUNGOztNQUVFO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBGYWNlYm9va0xvZ2luSGFuZGxlciB9IGZyb20gXCIuL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZmFjZWJvb2stbG9naW4vcGxhdGZvcm1zL2FuZHJvaWQvbGlicy9mYWNlYm9vay1yZWxlYXNlLmFhclwiO1xuLy8gaW1wb3J0IHsgRmFjZWJvb2tMb2dpbkhhbmRsZXIgfSBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWZhY2Vib29rLWxvZ2luXCI7XG5cbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuc2VydmljZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3VsdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC1kZXRhaWwvcmVzdWx0LWRldGFpbC5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBSZXN1bHRzQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgICAgICBSZXN1bHREZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXN1bHRTZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==