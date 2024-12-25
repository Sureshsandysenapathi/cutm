import { Component ,OnInit} from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  user: { id: number, name: string, email: string, role: string } = {
    id: 0,
    name: '',
    email: '',
    role: ''
  }; // Initialize the user object
  
  users: { id: number, name: string, email: string, role: string }[] = []; // Store users to display

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.user.name && this.user.email && this.user.role) {
      this.user.id = Math.floor(Math.random() * 1000); // Generate random ID
      this.usersService.addUser(this.user); // Add user to the service
      this.user = { id: 0, name: '', email: '', role: '' }; // Reset form
      this.usersService.getUsers().subscribe(users => {
        this.users = users; // Refresh users list
      });
    }
  }

  // Delete a user
  deleteUser(userId: number): void {
    this.usersService.deleteUser(userId);
    this.usersService.getUsers().subscribe(users => {
      this.users = users; // Refresh users list
    });
  }
}