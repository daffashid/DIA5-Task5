import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private router: Router) {
 }

 form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
    });

register(){
  console.log('Form submitted:', this.form.value);
  return this.router.navigate(['auth/login']);
}
}
