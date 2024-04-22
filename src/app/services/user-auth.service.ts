import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {map} from "rxjs";
import {Email} from "../models/email";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor( private HttpClient: HttpClient) { }


 createUser(user:User){
    return this.HttpClient.post<User>("https://softwareproject.azurewebsites.net/api/Account/register",user)


    // return this.HttpClient.post<Response>("https://softwareproject.azurewebsites.net/api/Account/register",user ,{observe:'response'}).pipe(map(
    //   (response)=> response.status==201
    //
    // ))

 }


 confirmEmail(email:Email){

  return this.HttpClient.post<Email>("https://softwareproject.azurewebsites.net/api/Account/confirm-email",email)
 }

 //
 // updateUser(updateUser:User){
 //
 //   return this.HttpClient.put<User>('http://localhost:8080/user/${updateUser.id}',updateUser)
 // }
 //
 //
 // deleteUser(id:number){
 //
 //   return this.HttpClient.delete<User>('http://localhost:8080/user/${id}')
 // }

}
