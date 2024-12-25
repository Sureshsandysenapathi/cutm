import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  assignments = [
    { id: 1, title: 'Angular Project', dueDate: '2024-12-30', status: 'Pending' },
    { id: 2, title: 'Database Design', dueDate: '2024-12-25', status: 'Submitted' },
    { id: 3, title: 'API Integration', dueDate: '2024-12-20', status: 'Graded' }
  ];

  editAssignment(id: number) {
    console.log('Editing assignment with ID:', id);
  }

  viewSubmissions(id: number) {
    console.log('Viewing submissions for assignment ID:', id);
  }
}
