import { Component, OnInit } from "@angular/core";

import { Result } from "./../result/result";
import { ResultService } from "./../result/result.service";
import { SearchBar } from "ui/search-bar";
import { Page } from "ui/page";
@Component({
    selector: "home-tag",
    moduleId: module.id,
    providers: [SearchBar],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    hideAll: boolean;
    filteredResults: Result[];
    allResults: Result[];
    results: Result[];
    home_label: string;
    home_hint: string;
    home_search: string;
    home_label1: string;
    home_label2: string;
    home_label3: string;
    home_label4: string;
    home_label5: string;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private resultService: ResultService, private page: Page, private searchbar: SearchBar ) { }
    constructor(private resultService: ResultService, private page: Page, private searchbar: SearchBar ) { }

    ngOnInit(): void {
        this.allResults = this.resultService.getResults();
        this.home_label = "Your wallet has:";
        this.home_hint = "Search Facebook friends";

        this.home_label1 = "$10.00";
        this.home_label2 = "=";
        this.home_label3 = "10 COIN";
        this.home_label4 = "Current conversion rate is 1 COIN: $1";
        this.home_label5 = "(updates every X seconds)";

        this.home_search = "";
        this.hideAll = true;
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        this.home_search = ""+searchBar.text;
        console.log("New value: " + this.home_search);
        if (this.home_search.length >= 1) {
            this.hideAll = false;
            this.filteredResults = this.resultService.getResultsBasedOn(this.home_search);
            // for (var i = 0; i < this.filteredResults.length; i++) {
                // console.log(this.filteredResults[i].name);
            // }
        } else if (this.home_search.length == 0) {
            this.filteredResults = this.resultService.getResultsBasedOn("");
            //hide all results
            this.hideAll = true;
            console.log("here");
        }
    }
}
