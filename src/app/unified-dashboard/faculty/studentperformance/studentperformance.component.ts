import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentperformance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentperformance.component.html',
  styleUrl: './studentperformance.component.css'
})
export class StudentperformanceComponent {
  students = [
    { id: 1, name: 'suuresh', course: 'Angular Basics', grade: 85 },
    { id: 2, name: 'mohan', course: 'Advanced Java', grade: 78 },
    { id: 3, name: 'rakesh', course: 'Data Science Essentials', grade: 92 }
  ];

  viewDetails(studentId: number) {
    console.log('Viewing performance details for student ID:', studentId);
  }
  }
