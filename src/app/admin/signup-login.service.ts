import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { FormGroup } from '@angular/forms';
// import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private httpClient: HttpClient) { }


  save(signupForm: FormGroup<any>){
    return this.httpClient.post('https://spring-boot-example1-app.herokuapp.com/person/signup' , signupForm.value);
    }

    login(loginForm: FormGroup<any>){
      var v1 = 'Basic ' + btoa(loginForm.value.username + ":" + loginForm.value.password);
      let headers = new HttpHeaders({Authorization: v1}); 
      return this.httpClient.get<any>('https://spring-boot-example1-app.herokuapp.com/person/login', { headers });
    }
}
