import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Result } from "./../result";
import { ResultService } from "./../result.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./result-detail.component.html",
})
export class ResultDetailComponent implements OnInit {
    result: Result;

    constructor(
        private resultService: ResultService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.result = this.resultService.getResult(id);
    }
}
