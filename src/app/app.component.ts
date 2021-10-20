import { Component, Inject } from '@angular/core';
import { UserService } from './_services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './Models/userModels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortFolio';
  apiUrl1?: string;
  name?: string;
  userInfo?: UserModel;

  constructor(@Inject ('API_BASE_URL')  apiUrl: string, public _userService: UserService){
    this.apiUrl1 = apiUrl;
    this.name = this._userService?.name

  }
   
  send(){
    console.log("abah hey")
    this._userService?.getUserData().subscribe((data: any) => {
      this.userInfo = {firstName: data.data.firstName, lastName: data.data.lastName, workHistory: data.data.workHistory}
      console.log(data.data)
    },
   
    (error: any) => {
      console.log(error)
    }, () => {
      console.log("completed")
    });
  }
}
