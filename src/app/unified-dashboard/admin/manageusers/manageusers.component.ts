import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-manageusers',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,FormsModule,AddUserComponent],
  templateUrl: './manageusers.component.html',
  styleUrl: './manageusers.component.css'
})
export class ManageusersComponent {
  constructor(private router: Router) {}  // Inject the Router service

  navigateToAddUser(): void {
    this.router.navigate(['/unified-dashboard/admin/add-user']); 
  }
  // Navigate to 'View Users' page
  navigateToViewUsers(): void {
    this.router.navigate(['/unified-dashboard/admin/view-users']);
  }

}
