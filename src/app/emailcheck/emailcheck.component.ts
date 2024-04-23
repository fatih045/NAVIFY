import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../services/user-auth.service";
import {NgForm} from "@angular/forms";
import {Email} from "../models/email";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-emailcheck',
  templateUrl: './emailcheck.component.html',
  styleUrls: ['./emailcheck.component.css']
})
export class EmailcheckComponent implements OnInit {



  emailcheck:Email
  constructor(private httpPost:UserAuthService, private route: ActivatedRoute) {
   this.emailcheck = {code:"",userId:""}


  }

  ngOnInit(): void {
    const userData=this.route.snapshot.paramMap.get('userData');  //userID
    if (userData){
      this.emailcheck.userId=userData
    }



  }

  confirmEmail(saveForm: NgForm) {

    console.log('Doğrulama formu:', saveForm.value);

    // Doğrulama işlemini başlatma
    this.httpPost.confirmEmail(saveForm.value).subscribe(
      (response) => {
        console.log('Doğrulama yanıtı:', response);
        // Yanıtı işleme
      },
      (error) => {
        console.error('Doğrulama hatası:', error);
      }
    );

  }


}
