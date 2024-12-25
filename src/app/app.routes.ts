import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { TechologyComponent } from './techology/techology.component';
import { BusinessComponent } from './business/business.component';
import { DesignComponent } from './design/design.component';
import { AiComponent } from './ai/ai.component';
import { DataComponent } from './data/data.component';
import { WebComponent } from './web/web.component';
import { CyberComponent } from './cyber/cyber.component';
import { CnComponent } from './cn/cn.component';
import { BioComponent } from './bio/bio.component';
import { EceComponent } from './ece/ece.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { AdvancedAiComponent } from './advanced-ai/advanced-ai.component';
import { NLPComponent } from './nlp/nlp.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { VedioComponent } from './vedio/vedio.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { MidtremTestComponent } from './midtrem-test/midtrem-test.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { TopRecruitersComponent } from './top-recruiters/top-recruiters.component';
import { AboutPaltformComponent } from './about-paltform/about-paltform.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FaqComponent } from './faq/faq.component';
import { CourseplansComponent } from './courseplans/courseplans.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessagesModule } from './messages/messages.module';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CourseOverviewComponent } from './student-dashboard/course-overview/course-overview.component';
import { AssignmentsDeadlinesComponent } from './student-dashboard/assignments-deadlines/assignments-deadlines.component';
import { GradesAnalyticsComponent } from './student-dashboard/grades-analytics/grades-analytics.component';
import { EnrollmentOptionsComponent } from './student-dashboard/enrollment-options/enrollment-options.component';
import { MessagesNotificationsComponent } from './student-dashboard/messages-notifications/messages-notifications.component';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { UnifiedDashboardComponent } from './unified-dashboard/unified-dashboard.component';
import { ManagecoursesComponent } from './unified-dashboard/admin/managecourses/managecourses.component';
import { ManageusersComponent } from './unified-dashboard/admin/manageusers/manageusers.component';
import { ReportsanalyticsComponent } from './unified-dashboard/admin/reportsanalytics/reportsanalytics.component';
import { SettingsComponent } from './unified-dashboard/admin/settings/settings.component';
import { MycoursesComponent } from './unified-dashboard/faculty/mycourses/mycourses.component';
import { StudentperformanceComponent } from './unified-dashboard/faculty/studentperformance/studentperformance.component';
import { MessagesComponent } from './unified-dashboard/faculty/messages/messages.component';
import { CoursesService } from './unified-dashboard/admin/courses.service';
import { CourseUploadComponent } from './unified-dashboard/admin/course-upload/course-upload.component';
import { UsersService } from './unified-dashboard/admin/users.service';
import { AddUserComponent } from './unified-dashboard/admin/add-user/add-user.component';
import { ViewUsersComponent } from './unified-dashboard/admin/view-users/view-users.component';
import { AssignmentsComponent } from './unified-dashboard/faculty/assignments/assignments.component';





export const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"About",component:AboutComponent},
    {path:"profile",component:ProfileComponent},
    {path:"Contact-us",component:ContactUsComponent},
    {path:"services",component:ServicesComponent},
    {path:"Login",component:LoginComponent},
    {path:"Signup",component:SignupComponent},
    {path:"footer",component:FooterComponent},

    { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Default route
    { path: 'course', component: CourseComponent },
    { path: 'techology', component: TechologyComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'design', component: DesignComponent },
    { path: 'ai', component: AiComponent},
    { path: 'data', component: DataComponent },
    { path: 'web', component: WebComponent },
    { path: 'cyber', component: CyberComponent },
    { path: 'cn', component: CnComponent },
    { path: 'bio', component: BioComponent },
    { path: 'ece', component: EceComponent},
    { path: 'mechanical', component: MechanicalComponent },
    { path: 'advanced-ai', component: AdvancedAiComponent },
    { path: 'nlp', component: NLPComponent },
    { path: 'data-management', component: DataManagementComponent},
    { path: 'machine-learning', component: MachineLearningComponent},
    { path: 'deep-learning', component: DeepLearningComponent},
    { path: '', redirectTo: '/Home',pathMatch: 'full'},
    { path: 'videos', component: VedioComponent },
    { path: 'assignments/assignment', component: AssignmentComponent },
    { path: 'tests/midterm', component: MidtremTestComponent },
    { path: 'tests/final', component: FinalTestComponent },
    { path: 'top', component: TopRecruitersComponent },
    { path: 'about-platform', component: AboutPaltformComponent },
    { path: 'popular-courses', component: PopularCoursesComponent },
    { path: 'faq', component: FaqComponent},
    { path: 'courseplans', component: CourseplansComponent},
    { path: 'subscription-plans', component: SubscriptionPlansComponent},
    { path: 'subscription-details', component: SubscriptionDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'courses', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
    { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'student-dashboard',
        component: StudentDashboardComponent,
        children: [
          { path: 'course-overview', component: CourseOverviewComponent },
          { path: 'assignments-deadlines', component: AssignmentsDeadlinesComponent },
          { path: 'grades-analytics', component: GradesAnalyticsComponent },
          { path: 'enrollment-options', component: EnrollmentOptionsComponent },
          { path: 'messages-notifications', component: MessagesNotificationsComponent },
          { path: 'settings', component: SettingsPageComponent },
        ],
      },
      { path: '', redirectTo: '/student-dashboard',pathMatch: 'full' },
    

      { path: 'unified-dashboard', component: UnifiedDashboardComponent ,
      children: [
  { path: 'unified-dashboard/admin', component: UnifiedDashboardComponent },
  { path: 'admin/manage-courses', component: ManagecoursesComponent },
  { path: 'admin/manage-users', component: ManageusersComponent },
  { path: 'admin/reports-analytics', component: ReportsanalyticsComponent },
  { path: 'admin/settings', component: SettingsComponent },
  {path: 'admin/course-upload',component: CourseUploadComponent},
  {path: 'admin/add-user',component: AddUserComponent},
  {path: 'admin/view-users',component: ViewUsersComponent},
  // Faculty Routes
  { path: 'unified-dashboard/faculty', component: UnifiedDashboardComponent },
  { path: 'faculty/my-courses', component: MycoursesComponent },
  { path: 'faculty/assignments', component: AssignmentsComponent },
  { path: 'faculty/student-performance', component: StudentperformanceComponent },
  { path: 'faculty/messages', component: MessagesComponent },
],
      },
  // Default Route
  { path: '', redirectTo: '/unified-dashboard',pathMatch: 'full' }



];

@NgModule({
   
    imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule, ReactiveFormsModule,HttpClientModule,UserModule,MessagesModule,StudentDashboardModule,UnifiedDashboardComponent,FormsModule],
    exports: [RouterModule],
    providers: [CoursesService,UsersService],

   
    
  })
  export class AppRoutesModule { }