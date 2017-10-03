"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const result_service_1 = require("./../result.service");
let ResultDetailComponent = class ResultDetailComponent {
    constructor(resultService, route) {
        this.resultService = resultService;
        this.route = route;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this.result = this.resultService.getResult(id);
    }
};
ResultDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./result-detail.component.html",
    }),
    __metadata("design:paramtypes", [result_service_1.ResultService,
        router_1.ActivatedRoute])
], ResultDetailComponent);
exports.ResultDetailComponent = ResultDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFHakQsd0RBQW9EO0FBT3BELElBQWEscUJBQXFCLEdBQWxDO0lBR0ksWUFDWSxhQUE0QixFQUM1QixLQUFxQjtRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBRUwsUUFBUTtRQUNKLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUE7QUFaWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsZ0NBQWdDO0tBQ2hELENBQUM7cUNBSzZCLDhCQUFhO1FBQ3JCLHVCQUFjO0dBTHhCLHFCQUFxQixDQVlqQztBQVpZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi8uLi9yZXN1bHRcIjtcbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi8uLi9yZXN1bHQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3VsdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXN1bHQ6IFJlc3VsdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlc3VsdFNlcnZpY2U6IFJlc3VsdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMucmVzdWx0U2VydmljZS5nZXRSZXN1bHQoaWQpO1xuICAgIH1cbn1cbiJdfQ==