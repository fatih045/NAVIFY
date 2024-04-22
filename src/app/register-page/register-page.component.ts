import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerModel:User

  constructor(private httpPost:UserAuthService) {
   this.registerModel = {userName:"", password:"",email:"",phoneNumber:"",tcNo:0,birthofYear:0,firstName:"",lastName:"",confirmPassword:""}

  };

  saveUser(saveForm: NgForm) {
    console.log(saveForm.value);

    this.httpPost.createUser(saveForm.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )

  }
}
