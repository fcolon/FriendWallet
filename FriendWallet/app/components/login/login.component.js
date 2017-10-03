"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const page_1 = require("ui/page");
const button_1 = require("ui/button");
// import { FacebookLoginHandler } from "nativescript-facebook-login";
const frame_1 = require("tns-core-modules/ui/frame/frame");
let LoginComponent = class LoginComponent {
    constructor(page, button) {
        this.page = page;
        this.button = button;
    }
    ngOnInit() {
        // this.login_label = "Your wallet has:";
        // this.hideAll = true;
        this.counter = 0;
    }
    successCallback(result) {
        //Do something with the result, for example get the AccessToken
        var token;
        if (frame_1.topmost().android) {
            token = result.getAccessToken().getToken();
        }
        else if (frame_1.topmost().ios) {
            token = result.token.tokenString;
        }
        alert(token);
    }
    cancelCallback() {
        alert("Login was cancelled");
    }
    failCallback(error) {
        var errorMessage = "Error with Facebook";
        //Try to get as much information as possible from error
        if (error) {
            // if (topmost().ios) {
            //     if (error.localizedDescription) {
            //         errorMessage += ": " + error.localizedDescription;
            //     }
            //     else if (error.code) {
            //         errorMessage += ": Code " + error.code;
            //     }
            //     else {
            //         errorMessage += ": " + error;   
            //     }
            // }
            if (frame_1.topmost().android) {
                if (error.getErrorMessage) {
                    errorMessage += ": " + error.getErrorMessage();
                }
                else if (error.getErrorCode) {
                    errorMessage += ": Code " + error.getErrorCode();
                }
                else {
                    errorMessage += ": " + error;
                }
            }
        }
        alert(errorMessage);
    }
    onTap(args) {
        let button = args.object;
        this.counter++;
        alert("Tapped " + this.counter + " times!");
        // this.signInWithGoogle();
    }
    onTapCreate(args) {
        let button = args.object;
        this.counter++;
        alert("Tapped CREATE " + this.counter + " times!");
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-tag",
        moduleId: module.id,
        providers: [button_1.Button],
        templateUrl: "./login.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page, button_1.Button])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQWtEO0FBQ2xELGtDQUErQjtBQUMvQixzQ0FBbUM7QUFFbkMsc0VBQXNFO0FBQ3RFLDJEQUEwRDtBQU8xRCxJQUFhLGNBQWMsR0FBM0I7SUFNSSxZQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFM0QsUUFBUTtRQUNKLHlDQUF5QztRQUN6Qyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ2xCLCtEQUErRDtRQUMvRCxJQUFJLEtBQUssQ0FBQztRQUNWLEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDckIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDdEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO1FBQ2xDLENBQUM7UUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELGNBQWM7UUFDVixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUMxQyx1REFBdUQ7UUFDdkQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNQLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFDeEMsNkRBQTZEO1lBQzdELFFBQVE7WUFDUiw2QkFBNkI7WUFDN0Isa0RBQWtEO1lBQ2xELFFBQVE7WUFDUixhQUFhO1lBQ2IsMkNBQTJDO1lBQzNDLFFBQVE7WUFDUixJQUFJO1lBQ0osRUFBRSxDQUFDLENBQUMsZUFBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLFlBQVksSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNuRCxDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsWUFBWSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JELENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsWUFBWSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDakIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUMsMkJBQTJCO0lBRS9CLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBZTtRQUN2QixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSixDQUFBO0FBM0VZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQyxlQUFNLENBQUM7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQU80QixXQUFJLEVBQWtCLGVBQU07R0FON0MsY0FBYyxDQTJFMUI7QUEzRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IEZhY2Vib29rTG9naW5IYW5kbGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYWNlYm9vay1sb2dpblwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsb2dpbi10YWdcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW0J1dHRvbl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBoaWRlQWxsOiBib29sZWFuO1xuICAgIC8vIGZpbHRlcmVkUmVzdWx0czogUmVzdWx0W107XG4gICAgLy8gbG9naW5fbGFiZWw6IHN0cmluZztcbiAgICBjb3VudGVyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgYnV0dG9uOiBCdXR0b24pIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMubG9naW5fbGFiZWwgPSBcIllvdXIgd2FsbGV0IGhhczpcIjtcbiAgICAgICAgLy8gdGhpcy5oaWRlQWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBzdWNjZXNzQ2FsbGJhY2socmVzdWx0KTogdm9pZCB7XG4gICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3VsdCwgZm9yIGV4YW1wbGUgZ2V0IHRoZSBBY2Nlc3NUb2tlblxuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICh0b3Btb3N0KCkuYW5kcm9pZCl7XG4gICAgICAgICAgdG9rZW4gPSByZXN1bHQuZ2V0QWNjZXNzVG9rZW4oKS5nZXRUb2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvcG1vc3QoKS5pb3Mpe1xuICAgICAgICAgIHRva2VuID0gcmVzdWx0LnRva2VuLnRva2VuU3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnQodG9rZW4pO1xuICAgIH1cblxuICAgIGNhbmNlbENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICBhbGVydChcIkxvZ2luIHdhcyBjYW5jZWxsZWRcIik7XG4gICAgfVxuXG4gICAgZmFpbENhbGxiYWNrKGVycm9yKTogdm9pZCB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIkVycm9yIHdpdGggRmFjZWJvb2tcIjtcbiAgICAgICAvL1RyeSB0byBnZXQgYXMgbXVjaCBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZSBmcm9tIGVycm9yXG4gICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBpZiAodG9wbW9zdCgpLmlvcykge1xuICAgICAgICAgICAgLy8gICAgIGlmIChlcnJvci5sb2NhbGl6ZWREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgLy8gICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCI6IFwiICsgZXJyb3IubG9jYWxpemVkRGVzY3JpcHRpb247XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2UgaWYgKGVycm9yLmNvZGUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiOiBDb2RlIFwiICsgZXJyb3IuY29kZTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlcnJvcjsgICBcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAodG9wbW9zdCgpLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZ2V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogXCIgKyBlcnJvci5nZXRFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IuZ2V0RXJyb3JDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBcIjogQ29kZSBcIiArIGVycm9yLmdldEVycm9yQ29kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiOiBcIiArIGVycm9yOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgIH0gXG5cbiAgICBvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgICAgICBhbGVydChcIlRhcHBlZCBcIiArIHRoaXMuY291bnRlciArIFwiIHRpbWVzIVwiKTtcbiAgICAgICAgLy8gdGhpcy5zaWduSW5XaXRoR29vZ2xlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVGFwQ3JlYXRlKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgICAgIGFsZXJ0KFwiVGFwcGVkIENSRUFURSBcIiArIHRoaXMuY291bnRlciArIFwiIHRpbWVzIVwiKTtcbiAgICB9XG59XG4iXX0=