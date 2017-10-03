"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const result_service_1 = require("./../result/result.service");
const search_bar_1 = require("ui/search-bar");
const page_1 = require("ui/page");
let HomeComponent = class HomeComponent {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private resultService: ResultService, private page: Page, private searchbar: SearchBar ) { }
    constructor(resultService, page, searchbar) {
        this.resultService = resultService;
        this.page = page;
        this.searchbar = searchbar;
    }
    ngOnInit() {
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
    onSubmit(args) {
        let searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    }
    onTextChanged(args) {
        let searchBar = args.object;
        this.home_search = "" + searchBar.text;
        console.log("New value: " + this.home_search);
        if (this.home_search.length >= 1) {
            this.hideAll = false;
            this.filteredResults = this.resultService.getResultsBasedOn(this.home_search);
            // for (var i = 0; i < this.filteredResults.length; i++) {
            // console.log(this.filteredResults[i].name);
            // }
        }
        else if (this.home_search.length == 0) {
            this.filteredResults = this.resultService.getResultsBasedOn("");
            //hide all results
            this.hideAll = true;
            console.log("here");
        }
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: "home-tag",
        moduleId: module.id,
        providers: [search_bar_1.SearchBar],
        templateUrl: "./home.component.html"
    }),
    __metadata("design:paramtypes", [result_service_1.ResultService, page_1.Page, search_bar_1.SearchBar])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFrRDtBQUdsRCwrREFBMkQ7QUFDM0QsOENBQTBDO0FBQzFDLGtDQUErQjtBQU8vQixJQUFhLGFBQWEsR0FBMUI7SUFjSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILDJHQUEyRztJQUMzRyxZQUFvQixhQUE0QixFQUFVLElBQVUsRUFBVSxTQUFvQjtRQUE5RSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUssQ0FBQztJQUV4RyxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUUzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLHVDQUF1QyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLENBQUM7UUFFL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNNLFFBQVEsQ0FBQyxJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sYUFBYSxDQUFDLElBQUk7UUFDckIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsR0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUUsMERBQTBEO1lBQ3RELDZDQUE2QztZQUNqRCxJQUFJO1FBQ1IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRSxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUF2RFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLHNCQUFTLENBQUM7UUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQWtCcUMsOEJBQWEsRUFBZ0IsV0FBSSxFQUFxQixzQkFBUztHQWpCekYsYUFBYSxDQXVEekI7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuLy4uL3Jlc3VsdC9yZXN1bHRcIjtcbmltcG9ydCB7IFJlc3VsdFNlcnZpY2UgfSBmcm9tIFwiLi8uLi9yZXN1bHQvcmVzdWx0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWUtdGFnXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6IFtTZWFyY2hCYXJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhpZGVBbGw6IGJvb2xlYW47XG4gICAgZmlsdGVyZWRSZXN1bHRzOiBSZXN1bHRbXTtcbiAgICBhbGxSZXN1bHRzOiBSZXN1bHRbXTtcbiAgICByZXN1bHRzOiBSZXN1bHRbXTtcbiAgICBob21lX2xhYmVsOiBzdHJpbmc7XG4gICAgaG9tZV9oaW50OiBzdHJpbmc7XG4gICAgaG9tZV9zZWFyY2g6IHN0cmluZztcbiAgICBob21lX2xhYmVsMTogc3RyaW5nO1xuICAgIGhvbWVfbGFiZWwyOiBzdHJpbmc7XG4gICAgaG9tZV9sYWJlbDM6IHN0cmluZztcbiAgICBob21lX2xhYmVsNDogc3RyaW5nO1xuICAgIGhvbWVfbGFiZWw1OiBzdHJpbmc7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdWx0U2VydmljZTogUmVzdWx0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHNlYXJjaGJhcjogU2VhcmNoQmFyICkgeyB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN1bHRTZXJ2aWNlOiBSZXN1bHRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc2VhcmNoYmFyOiBTZWFyY2hCYXIgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsbFJlc3VsdHMgPSB0aGlzLnJlc3VsdFNlcnZpY2UuZ2V0UmVzdWx0cygpO1xuICAgICAgICB0aGlzLmhvbWVfbGFiZWwgPSBcIllvdXIgd2FsbGV0IGhhczpcIjtcbiAgICAgICAgdGhpcy5ob21lX2hpbnQgPSBcIlNlYXJjaCBGYWNlYm9vayBmcmllbmRzXCI7XG5cbiAgICAgICAgdGhpcy5ob21lX2xhYmVsMSA9IFwiJDEwLjAwXCI7XG4gICAgICAgIHRoaXMuaG9tZV9sYWJlbDIgPSBcIj1cIjtcbiAgICAgICAgdGhpcy5ob21lX2xhYmVsMyA9IFwiMTAgQ09JTlwiO1xuICAgICAgICB0aGlzLmhvbWVfbGFiZWw0ID0gXCJDdXJyZW50IGNvbnZlcnNpb24gcmF0ZSBpcyAxIENPSU46ICQxXCI7XG4gICAgICAgIHRoaXMuaG9tZV9sYWJlbDUgPSBcIih1cGRhdGVzIGV2ZXJ5IFggc2Vjb25kcylcIjtcblxuICAgICAgICB0aGlzLmhvbWVfc2VhcmNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5oaWRlQWxsID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuaG9tZV9zZWFyY2ggPSBcIlwiK3NlYXJjaEJhci50ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyB0aGlzLmhvbWVfc2VhcmNoKTtcbiAgICAgICAgaWYgKHRoaXMuaG9tZV9zZWFyY2gubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJlc3VsdHMgPSB0aGlzLnJlc3VsdFNlcnZpY2UuZ2V0UmVzdWx0c0Jhc2VkT24odGhpcy5ob21lX3NlYXJjaCk7XG4gICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsdGVyZWRSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFJlc3VsdHNbaV0ubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ob21lX3NlYXJjaC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJlc3VsdHMgPSB0aGlzLnJlc3VsdFNlcnZpY2UuZ2V0UmVzdWx0c0Jhc2VkT24oXCJcIik7XG4gICAgICAgICAgICAvL2hpZGUgYWxsIHJlc3VsdHNcbiAgICAgICAgICAgIHRoaXMuaGlkZUFsbCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=