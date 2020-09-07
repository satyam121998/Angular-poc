import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})


export class RegisterComponent  {

Username: any;
Password: any;
url: string = "https://sample-api-v.herokuapp.com/";

  constructor(private http: HttpClient) { }

  register() {
    let postData = {
      "Username" : this.Username,
      "Password" : this.Password
    }
    return this.http.post(this.url, postData).toPromise().then(data => {
      console.log("Posted Data",data);
    })
  }

  ngOnInit(): void {
  }

}
