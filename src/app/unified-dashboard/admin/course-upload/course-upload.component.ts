import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';  // Importing the service
import { Course } from '../../models/course.model'; // Importing the model
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course-upload',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './course-upload.component.html',
  styleUrl: './course-upload.component.css'
})
export class CourseUploadComponent implements OnInit {
  courseForm!: FormGroup;
  courses: Course[] = [];  // Local array to store added courses

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      id: [0, Validators.required],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      instructor: ['', Validators.required],
      duration: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.courseForm.controls;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const newCourse: Course = this.courseForm.value;
    this.courses.push(newCourse);  // Add the new course to the local array
    console.log('Course added successfully!', newCourse);
    this.courseForm.reset();
  }
}