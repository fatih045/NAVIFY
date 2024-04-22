import { Component } from '@angular/core';
import {UserAuthService} from "../services/user-auth.service";
import {NgForm} from "@angular/forms";
import {Email} from "../models/email";

@Component({
  selector: 'app-emailcheck',
  templateUrl: './emailcheck.component.html',
  styleUrls: ['./emailcheck.component.css']
})
export class EmailcheckComponent {


  emailcheck:Email
  constructor(private httpPost:UserAuthService) {
   this.emailcheck = {code:"",userId:""}

  }

  confirmEmail(saveForm: NgForm) {
console.log(saveForm.value)
    this.httpPost.confirmEmail(saveForm.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )

  }
}
