import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CourseUploadComponent } from '../course-upload/course-upload.component';

@Component({
  selector: 'app-managecourses',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,FormsModule,CourseUploadComponent],
  templateUrl: './managecourses.component.html',
  styleUrl: './managecourses.component.css'
})
export class ManagecoursesComponent {
  constructor(private router: Router) {}

  navigateToCourseUpload() {
    this.router.navigate(['/unified-dashboard/admin/course-upload']);
  }
}
