import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Button } from "ui/button";
import { EventData } from "data/observable";
// import { * } from "com.facebook.FacebookSdk";
// import {*} from  "com.facebook.appevents.AppEventsLogger";
@Component({
    selector: "create-tag",
    moduleId: module.id,
    providers: [Button],
    templateUrl: "./create.component.html"
})
export class CreateComponent implements OnInit {
    // hideAll: boolean;
    // filteredResults: Result[];
    // create_label: string;
    counter: number;

    constructor(private page: Page, private button: Button) { }

    ngOnInit(): void {
        // this.create_label = "Your wallet has:";
        // this.hideAll = true;
        this.counter = 0;
    }

    onTap(args: EventData) {
        let button = <Button>args.object;
    
        this.counter++;
        alert("CREATED ACCOUNT " + this.counter + " times!");
    }
}
