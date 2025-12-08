import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {
  this.checkAuth();
 }

 form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    });

login(){
  console.log('Form submitted:', this.form.value);
  localStorage.setItem('token','dummy-token');
  return this.router.navigate(['auth/userlist']);
}

checkAuth(){
  if(localStorage.getItem('token')){
    this.router.navigate(['auth/userlist']);
  }
}
}
