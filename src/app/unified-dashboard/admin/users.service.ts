import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model'; // If models folder is directly inside unified-dashboard

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: { id: number, name: string, email: string, role: string }[] = [
 
  ];

  constructor() { }

  // Return an observable that emits the list of users
  getUsers(): Observable<{ id: number, name: string, email: string, role: string }[]> {
    return of(this.users); // Use `of()` to create an observable from the array
  }

  addUser(user: { id: number, name: string, email: string, role: string }): void {
    this.users.push(user);
  }

  deleteUser(id: number): Observable<void> {
    this.users = this.users.filter((user) => user.id !== id);
    return of(undefined); // Return an observable that completes without emitting a value
  }
  updateUser(user: User): Observable<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
    return of(); // Returning observable for update
  }
}
