import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent {

  courses = [
    { id: 1, name: 'Angular Basics', description: 'Introduction to Angular framework', students: 50 },
    { id: 2, name: 'Advanced Java', description: 'Deep dive into Java programming', students: 35 },
    { id: 3, name: 'Data Science Essentials', description: 'Learn the fundamentals of data science', students: 40 }
  ];

  viewCourse(courseId: number) {
    console.log('Viewing details for course ID:', courseId);
  }
}
