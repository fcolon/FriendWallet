import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Button } from "ui/button";
import { EventData } from "data/observable";
// import { FacebookLoginHandler } from "nativescript-facebook-login";
import { topmost } from "tns-core-modules/ui/frame/frame";
@Component({
    selector: "login-tag",
    moduleId: module.id,
    providers: [Button],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    // hideAll: boolean;
    // filteredResults: Result[];
    // login_label: string;
    counter: number;

    constructor(private page: Page, private button: Button) { }

    ngOnInit(): void {
        // this.login_label = "Your wallet has:";
        // this.hideAll = true;
        this.counter = 0;
    }

    successCallback(result): void {
        //Do something with the result, for example get the AccessToken
        var token;
        if (topmost().android){
          token = result.getAccessToken().getToken();
        }
        else if (topmost().ios){
          token = result.token.tokenString
        }
        alert(token);
    }

    cancelCallback(): void {
        alert("Login was cancelled");
    }

    failCallback(error): void {
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
            if (topmost().android) {
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

    onTap(args: EventData) {
        let button = <Button>args.object;
    
        this.counter++;
        alert("Tapped " + this.counter + " times!");
        // this.signInWithGoogle();
        
    }

    onTapCreate(args: EventData) {
        let button = <Button>args.object;
    
        this.counter++;
        alert("Tapped CREATE " + this.counter + " times!");
    }
}
