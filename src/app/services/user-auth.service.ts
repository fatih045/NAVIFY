import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {map} from "rxjs";

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
