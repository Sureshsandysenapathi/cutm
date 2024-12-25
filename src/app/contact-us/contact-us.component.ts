import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnifiedDashboardComponent } from '../unified-dashboard/unified-dashboard.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,RouterModule,UnifiedDashboardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
