import { CommonModule } from '@angular/common';
import { assertPlatform, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ManagecoursesComponent } from './admin/managecourses/managecourses.component';
import { ManageusersComponent } from './admin/manageusers/manageusers.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from '../assignment/assignment.component';

@Component({
  selector: 'app-unified-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterLink,ManagecoursesComponent,FormsModule,AssignmentComponent],
  templateUrl: './unified-dashboard.component.html',
  styleUrl: './unified-dashboard.component.css'
})
export class UnifiedDashboardComponent {
  role: string = 'admin'; // Default role is admin

  // Admin dashboard data
  adminMenu = [
    { label: 'Dashboard', Link: '/unified-dashboard' },
    { label: 'Manage Courses', Link: '/unified-dashboard/admin/manage-courses' },
    { label: 'Manage Users', Link: '/unified-dashboard/admin/manage-users' },
    { label: 'Reports & Analytics', Link: '/unified-dashboard/admin/reports-analytics' },
    { label: 'Settings', Link: '/unified-dashboard/admin/settings' }
  ];

  // Faculty dashboard data
  facultyMenu = [
    { label: 'Dashboard', Link: '/unified-dashboard' },
    { label: 'My Courses', Link: '/unified-dashboard/faculty/my-courses' },
    { label: 'Assignments', Link: '/unified-dashboard/faculty/assignments' },
    { label: 'Student Performance', Link: '/unified-dashboard/faculty/student-performance' },
    { label: 'Messages', Link: '/unified-dashboard/faculty/messages' }
  ];

  // Function to switch role
  switchRole(selectedRole: string) {
    this.role = selectedRole;
  }
  
}
