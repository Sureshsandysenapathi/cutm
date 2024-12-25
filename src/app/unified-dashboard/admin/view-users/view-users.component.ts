import { Component ,OnInit} from '@angular/core';
import { User } from '../../models/user.model'; // Adjust based on folder hierarchy



import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers: [UsersService], 
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit {

  users: User[] = [];
  editingIndex: number | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch users from the service
  getUsers(): void {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Delete user
  deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      this.getUsers(); // Refresh user list
    });
  }

  // Enable editing for a user
  editUser(index: number): void {
    this.editingIndex = index;
  }

  // Save updated user
  saveUser(user: User): void {
    this.usersService.updateUser(user).subscribe(() => {
      this.editingIndex = null; // Exit edit mode
      this.getUsers(); // Refresh user list
    });
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingIndex = null;
  }
}