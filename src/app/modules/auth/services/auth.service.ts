import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  env: string = "https://fakestoreapi.com/users";

  getUser() {
    return this.http.get(this.env);
  }

  getSingleUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.env}/${id}`);
  }

  addUser(newUser: any) {
    return this.http.post(this.env, newUser);
  }

  updateUser(id: number, updatedData: any) {
    return this.http.put(`${this.env}/${id}`, updatedData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.env}/${id}`);
  }
}
