import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
constructor(
  private router: ActivatedRoute, 
  private authService: AuthService, ) {}

  private updatedData = { username: 'updateduser', email: 'update@example.com' };
  users: any |null = null;

  ngOnInit(): void {
    const idParam = this.router.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam) : null;

    if (!id) {
      console.error("Id tidak ditemukan")
      return;
    }

    this.getUser(id);
  }

  private getUser(id: number): void {
    this.authService.getSingleUser(id).subscribe({
      next: (data: any[]) => {
        this.users = data;
      },
    });
  }

   
  // updateUser(id: number) {
  //   this.authService.updateUser(id, this.updatedData).subscribe({
  //     next: (response) => {
  //       const index = this.users.findIndex(u => u.id === id);
  //       if (index !== -1) {
  //         this.users[index] = { ...this.users[index], ...this.updatedData };
  //       }
  //       console.log('Pengguna berhasil diperbarui:', response);
  //     },
  //     error: (err) => {
  //       console.error('Gagal memperbarui pengguna:', err);
  //     }
  //   });
  // }
}
