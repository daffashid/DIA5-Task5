import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
constructor(
  private router: Router, 
  private authService: AuthService, ) {}

  private updatedData = { username: 'updateduser', email: 'update@example.com' };
  users: any[] = [];

  ngOnInit() {
    this.authService.getUser().subscribe((data: any) => {
      this.users = data;
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
}
