import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnifiedDashboardComponent } from './unified-dashboard.component';
import { RouterModule } from '@angular/router';
import { ManagecoursesComponent } from './admin/managecourses/managecourses.component';
import { ManageusersComponent } from './admin/manageusers/manageusers.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseUploadComponent } from './admin/course-upload/course-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { UsersService } from './admin/users.service';
import { AssignmentComponent } from '../assignment/assignment.component';
import { AssignmentsComponent } from './faculty/assignments/assignments.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,ManagecoursesComponent,ManageusersComponent,BrowserModule,RouterModule.forRoot([]),ReactiveFormsModule,CourseUploadComponent,HttpClientModule,AddUserComponent,FormsModule,ViewUsersComponent,AssignmentsComponent
  ],
  exports: [UnifiedDashboardComponent],
  providers: [UsersService],
})
export class UnifiedDashboardModule { }
