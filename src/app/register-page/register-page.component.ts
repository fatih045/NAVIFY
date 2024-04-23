import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {UserAuthService} from "../services/user-auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registerModel:User

  constructor(private httpPost:UserAuthService ,private router: Router) {
   this.registerModel = {userName:"", password:"",email:"",phoneNumber:"",tcNo:0,birthofYear:0,firstName:"",lastName:"",confirmPassword:""}

  };

  // saveUser(saveForm: NgForm) {
  //   console.log(saveForm.value);
  //
  //   this.httpPost.createUser(saveForm.value).subscribe(
  //     (response)=>{
  //       console.log(response);
  //     }
  //   )
  //
  // }
  saveUser(saveForm: NgForm) {
    console.log('Kullanıcı bilgileri:', saveForm.value);


    this.httpPost.createUser(saveForm.value).subscribe(
      (response) => {

        console.log('Yanıt:', response);


        if (response.succeeded) {

          const userId = response.data;


          console.log('Kullanıcı ID\'si:', userId);

          this.router.navigate(['/checkEmail',userId]);

        } else {

          console.error('Kullanıcı kaydı başarısız:', response.message);
        }
      },
      (error) => {

        console.error('HTTP isteği hatası:', error);
      }
    );
  }

}
