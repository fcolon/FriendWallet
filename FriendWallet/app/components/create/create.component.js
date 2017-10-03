"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const page_1 = require("ui/page");
const button_1 = require("ui/button");
// import { * } from "com.facebook.FacebookSdk";
// import {*} from  "com.facebook.appevents.AppEventsLogger";
let CreateComponent = class CreateComponent {
    constructor(page, button) {
        this.page = page;
        this.button = button;
    }
    ngOnInit() {
        // this.create_label = "Your wallet has:";
        // this.hideAll = true;
        this.counter = 0;
    }
    onTap(args) {
        let button = args.object;
        this.counter++;
        alert("CREATED ACCOUNT " + this.counter + " times!");
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: "create-tag",
        moduleId: module.id,
        providers: [button_1.Button],
        templateUrl: "./create.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page, button_1.Button])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBa0Q7QUFDbEQsa0NBQStCO0FBQy9CLHNDQUFtQztBQUVuQyxnREFBZ0Q7QUFDaEQsNkRBQTZEO0FBTzdELElBQWEsZUFBZSxHQUE1QjtJQU1JLFlBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUUzRCxRQUFRO1FBQ0osMENBQTBDO1FBQzFDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDakIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0osQ0FBQTtBQXBCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsZUFBTSxDQUFDO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDekMsQ0FBQztxQ0FPNEIsV0FBSSxFQUFrQixlQUFNO0dBTjdDLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG4vLyBpbXBvcnQgeyAqIH0gZnJvbSBcImNvbS5mYWNlYm9vay5GYWNlYm9va1Nka1wiO1xuLy8gaW1wb3J0IHsqfSBmcm9tICBcImNvbS5mYWNlYm9vay5hcHBldmVudHMuQXBwRXZlbnRzTG9nZ2VyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtdGFnXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6IFtCdXR0b25dLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBoaWRlQWxsOiBib29sZWFuO1xuICAgIC8vIGZpbHRlcmVkUmVzdWx0czogUmVzdWx0W107XG4gICAgLy8gY3JlYXRlX2xhYmVsOiBzdHJpbmc7XG4gICAgY291bnRlcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGJ1dHRvbjogQnV0dG9uKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLmNyZWF0ZV9sYWJlbCA9IFwiWW91ciB3YWxsZXQgaGFzOlwiO1xuICAgICAgICAvLyB0aGlzLmhpZGVBbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgICAgIGFsZXJ0KFwiQ1JFQVRFRCBBQ0NPVU5UIFwiICsgdGhpcy5jb3VudGVyICsgXCIgdGltZXMhXCIpO1xuICAgIH1cbn1cbiJdfQ==