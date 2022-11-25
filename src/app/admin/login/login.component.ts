import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SignupLoginService } from '../signup-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginStatus = true;

  constructor(private formBuilder: FormBuilder, private service: SignupLoginService, private router: Router) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(){
    this.service.login(this.loginForm).subscribe(
      results => {
        console.log(results);
        if(results){
          //navigate to dashboard
          this.router.navigate(['dashboard']);
          var value = 'Basic ' + btoa(this.loginForm.value.username + ':' + this.loginForm.value.password);
          sessionStorage.setItem('loginCredentials', value);
        }
        else{
          this.loginStatus = false;
          this.loginForm.get('password').setValue("");
          this.loginForm.get('password').markAsUntouched();
        }
     },
        error => {
        console.log(error);
        this.loginStatus = false
        this.loginForm.get('password').setValue("");
        this.loginForm.get('password').markAsUntouched();

      }
    )
  }

  
}
