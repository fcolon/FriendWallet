"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const result_service_1 = require("./../result.service");
let ResultsComponent = class ResultsComponent {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(resultService) {
        this.resultService = resultService;
    }
    ngOnInit() {
        this.results = this.resultService.getResults();
    }
};
ResultsComponent = __decorate([
    core_1.Component({
        selector: "ns-results",
        moduleId: module.id,
        templateUrl: "./results.component.html",
    }),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFrRDtBQUdsRCx3REFBb0Q7QUFPcEQsSUFBYSxnQkFBZ0IsR0FBN0I7SUFFSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUksQ0FBQztJQUVyRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25ELENBQUM7Q0FDSixDQUFBO0FBVFksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQUtxQyw4QkFBYTtHQUp2QyxnQkFBZ0IsQ0FTNUI7QUFUWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuLy4uL3Jlc3VsdFwiO1xuaW1wb3J0IHsgUmVzdWx0U2VydmljZSB9IGZyb20gXCIuLy4uL3Jlc3VsdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXJlc3VsdHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVzdWx0cy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXN1bHRzOiBSZXN1bHRbXTtcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3VsdFNlcnZpY2U6IFJlc3VsdFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHRoaXMucmVzdWx0U2VydmljZS5nZXRSZXN1bHRzKCk7XG4gICAgfVxufSJdfQ==