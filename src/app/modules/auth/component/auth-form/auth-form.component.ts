import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Input() title: string = '';
  @Output() formSubmitted = new EventEmitter<any>(); 
    
    addUserForm!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initForm();
    }

    initForm(): void {
        this.addUserForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    submitForm(): void {
        if (this.addUserForm.invalid) {
            this.addUserForm.markAllAsTouched();
            console.error('Form is invalid');
            return;
        }

        const formData = this.addUserForm.value;
        
        this.formSubmitted.emit(formData); 
        this.addUserForm.reset(); 
    }

}
