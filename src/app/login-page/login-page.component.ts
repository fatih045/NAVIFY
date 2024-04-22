import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../models/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  logingModel: Partial<User> = { userName: "", password: "" };

  constructor() {
    this.logingModel= {userName:"", password:""};
  }


  save(form:NgForm) {
    console.log(form.value);
  }
}

