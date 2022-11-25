// import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupLoginService } from '../signup-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  //[x: string]: any;
 
   signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: SignupLoginService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this['formBuilder'].group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  get firstName(){
    return this.signupForm.get('firstName');
  }
  get lastName(){
    return this.signupForm.get('lastName');
  }
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }


  save(){
  this.service.save(this.signupForm).subscribe(
      results => {
        console.log(results);
        if(results){
          //navigate to dashboard
          this.router.navigate(['login']);
        }
      }
   )
  }
}
