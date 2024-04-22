import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  logingModel: Partial<User> = { userName: "", password: "" };

  constructor(private httpPost:UserAuthService) {
    this.logingModel= {userName:"", password:""};
  }


  save(form:NgForm) {
    console.log(form.value);

    this.httpPost.createUser(form.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }


}

