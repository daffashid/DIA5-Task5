import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
constructor(
  private router: Router, 
  private authService: AuthService, ) 
  {
  }

  private updatedData = { username: 'updateduser', email: 'update@example.com' };
  users: any[] = [];

  ngOnInit() {
    this.authService.getUser().subscribe((data: any) => {
      this.users = data;
    });
  }
  

  postUser(formData:{ username: string; email: string }) {
    
    const userPayload = {
      username: formData.username,
      email: formData.email,
      name: { firstname: 'First', lastname: 'Last' }
    };

    this.authService.addUser(userPayload).subscribe({
      next: (response) => {
        const temp = { ...userPayload, id: this.users.length + 1 };
        this.users.push(temp);
        console.log('Pengguna berhasil ditambahkan:', response);
      },
      error: (err) => {
        console.error('Gagal menambah pengguna:', err);
      }
    });
  }

  updateUser(id: number) {
    this.authService.updateUser(id, this.updatedData).subscribe({
      next: (response) => {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
          this.users[index] = { ...this.users[index], ...this.updatedData };
        }
        console.log('Pengguna berhasil diperbarui:', response);
      },
      error: (err) => {
        console.error('Gagal memperbarui pengguna:', err);
      }
    });
  }

  deleteUser(id: number) {
    this.authService.deleteUser(id).subscribe({
      next: (response) => {
        this.users = this.users.filter(u => u.id !== id);
        console.log('Pengguna berhasil dihapus:', response);
      },
      error: (err) => {
        console.error('Gagal menghapus pengguna:', err);
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
