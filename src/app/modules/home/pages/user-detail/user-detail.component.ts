import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit { 
  
  userForm: FormGroup;
  
  isEditing: boolean = false; 
  user: any | null = null; 

  constructor(
    private router: ActivatedRoute, 
    private authService: AuthService, 
    private fb: FormBuilder 
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const idParam = this.router.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null; 

    if (!id) {
      console.error("Id tidak ditemukan")
      return;
    }

    this.getUser(id);
  }

  private getUser(id: number): void {
    this.authService.getSingleUser(id).subscribe({
      next: (data) => { 
        this.user = data;
        this.userForm.patchValue({
          username: data.username,
          email: data.email
        });
      },
      error: (err) => {
        console.error('Gagal mengambil data pengguna:', err);
        this.user = null;
      }
    });
  }

  updateUser(id: number) {
    if (this.userForm.invalid || !this.user) {
        console.error("Form tidak valid atau data pengguna tidak tersedia.");
        return;
    }
    
    const updatedPayload = this.userForm.value;

    this.authService.updateUser(id, updatedPayload).subscribe({
      next: (response) => {
        
        if (this.user) {
            this.user.username = updatedPayload.username;
            this.user.email = updatedPayload.email;
        }

        this.isEditing = false; 
        
        console.log('Pengguna berhasil diperbarui:', response);
        alert(`Data pengguna (ID: ${id}) berhasil diperbarui!`); 
      },
      error: (err) => {
        console.error('Gagal memperbarui pengguna:', err);
        alert('Gagal memperbarui pengguna. Cek konsol untuk detailnya.');
      }
    });
  }
}