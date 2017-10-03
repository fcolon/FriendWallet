import { Component, OnInit } from "@angular/core";

import { Result } from "./../result";
import { ResultService } from "./../result.service";

@Component({
    selector: "ns-results",
    moduleId: module.id,
    templateUrl: "./results.component.html",
})
export class ResultsComponent implements OnInit {
    results: Result[];
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private resultService: ResultService) { }

    ngOnInit(): void {
        this.results = this.resultService.getResults();
    }
}